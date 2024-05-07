import express from 'express'
import postsRoutes from './routes/posts.route.js'

const app = express()

const __dirname = import.meta.dirname
app.use(express.static(__dirname + '/public'))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/posts', postsRoutes)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Servidor encendido http://localhost:${PORT}`)
})