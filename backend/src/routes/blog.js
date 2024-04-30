import express from "express";
import { upload } from "../configs/cloudinary.js";
import { deleteBlog, getAllBlog, newBlog } from "../controllers/blog.js";
const router = express.Router();

router.route("/").post(upload.single("banner"), newBlog).get(getAllBlog);
router.route("/:id").delete(deleteBlog);

export default router;
