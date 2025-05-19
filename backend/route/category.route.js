import { Router } from 'express'
import auth from '../middleware/auth.js'
import { AddCategoryController, deleteCategoryController, getCategoryController, updateCategoryController } from '../controllers/category.controller.js'
import uploadImageController from "../controllers/uploadImage.controller.js"
import upload from '../middleware/multer.js'
const categoryRouter = Router()

categoryRouter.post("/add-category",auth,AddCategoryController)
categoryRouter.get('/get',getCategoryController)
categoryRouter.put('/update',auth,updateCategoryController)
categoryRouter.delete("/delete",auth,deleteCategoryController)
categoryRouter.post("upload-category", auth,upload.single("image"),uploadImageController)
categoryRouter.post('/upload-subcategory', auth, upload.single('image'), uploadImageController)
export default categoryRouter