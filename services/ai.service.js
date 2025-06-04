import { GoogleGenerativeAI } from '@google/generative-ai'
import dotenv from 'dotenv'

dotenv.config()

// Initialize with the latest model
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY)

async function generateAIResponse (userQuery, gamesData, userName) {
  try {
    if (!gamesData?.length) {
      return `This game "${userQuery}" is not available on any platform. Please check the game name and try again.`
    }

    const model = genAI.getGenerativeModel({
      model: 'gemini-2.0-flash',
      generationConfig: {
        maxOutputTokens: 2000,
        temperature: 0.7
      }
    })

    const prompt = `Act as a video game expert assistant. 
The user asked: "${userQuery}"

Here are the matching games:
${JSON.stringify(gamesData, null, 2)}

Provide a detailed response about:
1. Greeting the user by their name: ${userName}
2. Game features and gameplay
3. Platform-specific details
4. Recommendations if applicable
5. Keep response under 900 words
6. Do not include game_id or any sensitive data
7. Tell the story of the game
8. If the user asks for unreleased games, explain about them and their expected release date
9. If no matching games are found, suggest alternatives and ask for correct spelling if needed.`

    const result = await model.generateContent(prompt)
    const response = await result.response
    return response.text()
  } catch (error) {
    console.error('AI Generation Error:', {
      message: error.message,
      status: error.status,
      details: error.errorDetails || 'No additional details'
    })
    return "I couldn't generate a response at this time. Please try again later."
  }
}

export async function withoutGameData (userQuery, userName) {
  try {
    const model = genAI.getGenerativeModel({
      model: 'gemini-2.0-flash',
      generationConfig: {
        maxOutputTokens: 2000,
        temperature: 0.7
      }
    })

    const prompt = `Act as a video game expert assistant. 
The user asked: "${userQuery}"

Provide a detailed response about:
1. Greeting the user by their name: ${userName}
2. Game features and gameplay
3. Platform-specific details
4. Recommendations if applicable
5. Keep response under 900 words
6. Do not include game_id or any sensitive data
7. Tell the story of the game
8. If the user asks for unreleased games, explain about them and their expected release date
9. If no matching games are found, suggest alternatives and ask for correct spelling if needed.
10. If any user ask what is the use of GameNation platform, explain it properly(we have a preowned games, console, and accessories which is in less price).`
    const result = await model.generateContent(prompt)
    const response = await result.response
    return response.text()
  } catch (error) {
    console.error('AI Generation Error:', {
      message: error.message,
      status: error.status,
      details: error.errorDetails || 'No additional details'
    })
    return "I couldn't generate a response at this time. Please try again later."
  }
}

export default generateAIResponse
