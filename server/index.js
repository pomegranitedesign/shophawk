const express = require('express')
const cors = require('cors')

// Basic setup
const app = express()
const PORT = process.env.PORT || 4000

// Middlewares
app.use(express.json({ extended: false })) // This helps us send JSON data to client/db
app.use(cors()) // Prevents from throwing an error on the client side

// Routes
app.get('/api/test', (req, res) => {
	res.send('Testing API')
})

// Start the server
app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`))
