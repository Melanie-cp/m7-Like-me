import { Router } from 'express'
import { createPost, getAllPosts, likePost } from '../controllers/posts.controllers.js'

const router = Router()

router.get('/', getAllPosts)
router.post('/', createPost)
router.put('/:id', likePost)


export default router;