import { Router } from 'express'
import { createDestination, getAllDestinations } from '../controllers/destination.controller.js'

const router = Router()


router.route("/get-all-destinations")
.get(getAllDestinations)

router.route("/create-destination")
.post(createDestination)

export default router