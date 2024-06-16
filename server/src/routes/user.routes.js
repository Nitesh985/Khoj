import { Router } from 'express'
import { registerUser, loginUser, logoutUser, refreshAccessToken } from '../controllers/user.controller.js'
import { upload } from '../middlewares/multer.middleware.js'
import { verifyUser } from '../middlewares/auth.middleware.js'


const router = Router()

router
.route("/sign-up")
.post(upload.single('avatar'), registerUser)

router
.route("/sign-in")
.post(loginUser)

router
.route("/sign-out")
.post(verifyUser, logoutUser)


router
.route("/refresh-access-token")
.post(refreshAccessToken)


export default router