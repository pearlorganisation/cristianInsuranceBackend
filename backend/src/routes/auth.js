import express from "express";
import { login, signup } from "../controllers/auth.js";

const router = express.Router();
router.route("/login", login);
router.route("/signup", signup);
export default router;
