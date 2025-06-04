import express from 'express'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config({ path: '../.env' })
import User from '../models/userAuthentication/user.model.js'

const router = express.Router()

// signup

router.post('/signup', async (req, res) => {
  const { userName, userEmail, userPassword } = req.body

  if (userName && userEmail && userPassword) {
    try {
      const existingData = await User.findOne({ userEmail })

      if (existingData) {
        return res.status(400).send('User already exists.')
      }

      const salt = await bcrypt.genSalt(10)
      const hashedPassword = await bcrypt.hash(userPassword, salt)

      const user = new User({
        userName,
        userEmail,
        userPassword: hashedPassword
      })

      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
        expiresIn: '1d'
      })

      user.token = token
      await user.save()

      // ✅ Set cookie here
      res.cookie('token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production', // true only in production (HTTPS)
        sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax',
        maxAge: 24 * 60 * 60 * 1000
      })

      // ✅ Send final response
      res.status(201).json({ message: 'User registered successfully.' })
    } catch (err) {
      console.error(err)
      res.status(500).send('Error saving user.')
    }
  } else {
    res
      .status(400)
      .send('All fields are required(userName, userEmail, userPassword).')
  }
})

// login
router.post('/login', async (req, res) => {
  const { userEmail, userPassword } = req.body
  try {
    const existing = await User.findOne({ userEmail })
    if (!existing) {
      return res
        .status(404)
        .send('User not found with this email. Go to signup')
    }

    const isMatch = await bcrypt.compare(userPassword, existing.userPassword)
    if (!isMatch) {
      return res.status(400).send('Invalid credentials')
    }

    const token = jwt.sign({ id: existing._id }, process.env.JWT_SECRET, {
      expiresIn: '1d'
    })

    // ✅ Set cookie here
    res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production', // true only in production (HTTPS)
      sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax',
      maxAge: 24 * 60 * 60 * 1000
    })

    // ✅ Send final response
    res.status(200).json({ message: 'User logged in successfully.' })
  } catch (error) {
    console.error(error)
    res.status(500).send('Error logging in user.')
  }
})

export default router
