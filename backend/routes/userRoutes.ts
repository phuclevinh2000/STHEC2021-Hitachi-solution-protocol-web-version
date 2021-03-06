import express from "express"
const router = express.Router()
import {authUser, getUserProfile, registerUser, updateUserProfile} from "../controllers/userController"
import { protect } from "../middleware/authMiddleware"

router.post('/login', authUser)
router.route('/').post(registerUser)
router.route('/profile').get(protect, getUserProfile).put(protect, updateUserProfile);

export default router;