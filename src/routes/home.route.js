import { Router } from "express";
import { welcome } from "../controllers/home.controller.js";
const router = Router();

router.route("/").get(welcome)
export default router