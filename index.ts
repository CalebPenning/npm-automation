import express from 'express'

const app = express()
const PORT = process.env.PORT || 3001
let runningMessage = `Server is running on port ${PORT}`

app.get('/', (req, res) => {
    console.log(`API request from ${req.ip}`)
    res.send(runningMessage + "hello!")
})

const server = app.listen(PORT, () => {
    console.log(runningMessage)
})

module.exports = server