import { Router } from 'express'
import { createDestination, getAllDestinations } from '../controllers/destination.controller.js'
import { upload } from '../middlewares/multer.middleware.js'
import { verifyUser } from '../middlewares/auth.middleware.js'


const router = Router()


router.route("/get-all-destinations")
.get(getAllDestinations)

router.route("/create-destination")
.post(verifyUser, upload.array('images', 10), createDestination)

export default router