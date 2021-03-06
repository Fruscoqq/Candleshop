import express from 'express'
import colors from 'colors'
import connectDB from "./config/db.js"
import products from '../backend/data/products.js'
import dotenv from 'dotenv'

dotenv.config()

connectDB()

const app = express()

app.get('/', (req, res) => {
  res.send('API is running..')
})

app.get('/api/products', (req, res) => {
  res.json(products)
})

app.get('/api/products/:id', (req, res) => {
  const product = products.find((p) => p._id === req.params.id)
  res.json(product)
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(
    `The server is running in ${process.env.NODE_ENV} mode on ${PORT} port`.yellow
  )
})
