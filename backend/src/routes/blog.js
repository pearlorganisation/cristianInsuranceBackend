import express from "express";
import { upload } from "../configs/cloudinary.js";
import { deleteBlog, getAllBlog, newBlog, updateBlog } from "../controllers/blog.js";
const router = express.Router();

router.route("/").post(upload.single("banner"), newBlog).get(getAllBlog);
router.route("/:id").delete(deleteBlog).put(upload.single("banner"),updateBlog);

export default router;
