import { Router } from 'express'
import { registerUser } from '../controllers/user.controller'


const router = Router()

router
.route("/sign-up")
.post(upload.file['avatar'], registerUser)


router
.route("/sign-in")
.post(loginUser)

router
.route("/sign-out")
.post(logoutUser)


router
.route("/refresh-access-token")
.post(refreshAccessToken)


export default router