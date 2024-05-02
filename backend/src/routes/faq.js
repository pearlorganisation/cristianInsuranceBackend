import express from "express";
import { deleteFaq, getAllFaq, newFaq } from "../controllers/faq.js";
const router = express.Router();

router.route("/").get(getAllFaq).post(newFaq)
router.route("/:id").delete(deleteFaq);
export default router;
