import express from "express";
import { deleteFaq, getAllFaq, newFaq, updateFaq } from "../controllers/faq.js";
const router = express.Router();

router.route("/").get(getAllFaq).post(newFaq)
router.route("/:id").delete(deleteFaq).patch(updateFaq);
export default router;
