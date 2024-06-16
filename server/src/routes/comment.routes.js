import { Router } from 'express'
import { verifyUser } from '../middlewares/auth.middleware.js'
import { createComment, getAllComments } from '../controllers/comment.controller.js'

const router = Router()


router.route("/create-comment/:destinationId")
.post(verifyUser, createComment)

router.route("/get-all-comments")
.get(getAllComments)

export default router