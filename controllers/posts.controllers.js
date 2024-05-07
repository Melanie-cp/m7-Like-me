import { Posts } from '../models/posts.model.js'

export const getAllPosts = async (req, res) => {
    try {
        const posts = await Posts.findAll()
        return res.json(posts)
    } catch (error) {
        console.log(error)
        return res.status(500).json(error)
    }
}

export const createPost = async (req, res) => {
    try {
        const { usuario, url, descripcion } = req.body
        const posts = await Posts.create({ usuario, url, descripcion })
        return res.json(posts)
    } catch (error) {
        console.log(error)
        return res.status(500).json(error)
    }
}

export const likePost = async (req, res) => {
    try {
        const { id } = req.params
        const posts = await Posts.update(id)
        return res.json(posts)
    } catch (error) {
        console.log(error)
        return res.status(500).json(error)
    }
}