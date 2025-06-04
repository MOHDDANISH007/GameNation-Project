import express from 'express'

import userDB from '../models/userAuthentication/user.model.js'
import authenticateUser from '../middleware/auth.middleware.js'
const router = express.Router()

router.get('/', (req, res) => {
  res.json({
    message: 'Cart page working!'
  })
})

router.post('/add', authenticateUser, async (req, res) => {
  const userId = req.user.id
  const productId = parseInt(req.body.productId)
  const productQuantity = parseInt(req.body.quantity) // ✅ Fix here

  if (isNaN(productId) || isNaN(productQuantity) || productQuantity <= 0) {
    return res.status(400).json({ error: 'Invalid product ID or quantity' })
  }

  try {
    const user = await userDB.findOne({ _id: userId })
    if (!user) {
      return res.status(404).json({ error: 'User not found' })
    }

    const existingProduct = user.cart.find(item => item.productId === productId)

    if (existingProduct) {
      existingProduct.quantity += productQuantity
    } else {
      user.cart.push({ productId, quantity: productQuantity })
    }

    await user.save()

    res.json({
      message: 'Product added to cart!',
      cart: user.cart
    })
  } catch (error) {
    console.error('Error adding product to cart:', error)
    res.status(500).json({ error: 'Server error while adding product to cart' })
  }
})

router.post('/remove', authenticateUser, async (req, res) => {
  const userId = req.user.id;
  const productId = parseInt(req.body.productId);
  const productQuantity = parseInt(req.body.quantity);

  try {
    if (isNaN(productId) || isNaN(productQuantity) || productQuantity <= 0) {
      return res.status(400).json({ error: 'Invalid product ID or quantity' });
    }

    const user = await userDB.findOne({ _id: userId });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    const existingProduct = user.cart.find(item => item.productId === productId);
    if (!existingProduct) {
      return res.status(404).json({ error: 'Product not found in cart' });
    }

    if (existingProduct.quantity <= productQuantity) {
      // Remove product completely
      user.cart = user.cart.filter(item => item.productId !== productId);
    } else {
      // Decrease quantity
      existingProduct.quantity -= productQuantity;
    }

    await user.save();

    res.json({
      message: 'Product removed from cart!',
      cart: user.cart
    });
  } catch (error) {
    console.error('Error removing product from cart:', error);
    res.status(500).json({ error: 'Server error while removing product from cart' });
  }
});


export default router
