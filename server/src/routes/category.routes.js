import { Router } from 'express'
import { addCategory, getAllCategories } from '../controllers/category.controller.js'


const router = Router()

router.route('/add-category/')
.post(addCategory)

router.route('/get-all-categories/')
.get(getAllCategories)



export default router