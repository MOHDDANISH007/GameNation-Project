import express from "express"


import authenticateUser from "../middleware/auth.middleware.js"
import User from "../models/userAuthentication/user.model.js"
import ps4GamesSchema from "../models/gamesSchema/ps4GamesSchema.js"
import ps5GamesSchema from "../models/gamesSchema/ps5GamesSchema.js"
import xboxXGamesSchema from "../models/gamesSchema/xboxXGamesSchema.js"
import xboxoneGamesSchema from "../models/gamesSchema/xboxOneGamesSchema.js"
import generateAIResponse, { withoutGameData } from "../services/ai.service.js"

const router = express.Router()

router.post("/post", authenticateUser, async (req, res) => {
  try {
    const userId = req.user.id
    const userQuery = req.body.query

    if (!userQuery || typeof userQuery !== 'string') {
      return res.status(400).json({ message: "Valid string query is required" })
    }

    const user = await User.findById(userId)
    if (!user) {
      return res.status(404).json({ message: "User not found" })
    }

    const userName = user.userName
    const searchTerm = userQuery.toLowerCase().trim()

    const [ps4Games, ps5Games, xboxXGames, xboxOneGames] = await Promise.all([
      ps4GamesSchema.find({}, { base_name: 1, game_id: 1, _id: 0 }).lean(),
      ps5GamesSchema.find({}, { base_name: 1, game_id: 1, _id: 0 }).lean(),
      xboxXGamesSchema.find({}, { base_name: 1, game_id: 1, _id: 0 }).lean(),
      xboxoneGamesSchema.find({}, { base_name: 1, game_id: 1, _id: 0 }).lean()
    ])


    const filterGames = (games) => games.filter(game =>
      game.base_name?.toLowerCase().includes(searchTerm)
    )

    const ps4Filtered = filterGames(ps4Games)
    const ps5Filtered = filterGames(ps5Games)
    const xboxXFiltered = filterGames(xboxXGames)
    const xboxOneFiltered = filterGames(xboxOneGames)

    if (!ps4Filtered.length && !ps5Filtered.length && !xboxXFiltered.length && !xboxOneFiltered.length) {
      const response = await withoutGameData(userQuery, userName)
      return res.status(200).json({
        message: "No matching games found. AI response:",
        aiResponse: response
      })
    }

    const [ps4AI, ps5AI, xboxXAI, xboxOneAI] = await Promise.all([
      ps4Filtered.length ? generateAIResponse(userQuery, ps4Filtered, userName) : "No PS4 games found.",
      ps5Filtered.length ? generateAIResponse(userQuery, ps5Filtered, userName) : "No PS5 games found.",
      xboxXFiltered.length ? generateAIResponse(userQuery, xboxXFiltered, userName) : "No Xbox Series X games found.",
      xboxOneFiltered.length ? generateAIResponse(userQuery, xboxOneFiltered, userName) : "No Xbox One games found."
    ])

    res.status(200).json({
      message: "AI response and filtered games",
      searchTerm,
      ps4Games: ps4Filtered,
      ps5Games: ps5Filtered,
      xboxGames: xboxXFiltered,
      xboxOneGames: xboxOneFiltered,
      aiResponses: {
        ps4: ps4AI,
        ps5: ps5AI,
        xboxX: xboxXAI,
        xboxOne: xboxOneAI
      }
    })
  } catch (error) {
    console.error("Error in /post route:", error)
    res.status(500).json({
      message: "Internal server error",
      error: error.message
    })
  }
})

export default router
