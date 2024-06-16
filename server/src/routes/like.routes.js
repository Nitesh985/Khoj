import { Router } from "express";
import { getLikedDestinations, toggleCommentLike, toggleLike } from "../controllers/like.controller.js";

const router = Router()

router.route("get-liked-destinations")
.get(getLikedDestinations)

router.route("toggle-like")
.post(toggleLike)

router.route("toggle-comment-like")
.post(toggleCommentLike)


export default router