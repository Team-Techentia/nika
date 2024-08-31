import express from "express";
import { submitForm , fetchEntries,  deleteEntry} from "../controllers/userController.js";
import {upload} from "../middlewares/multer.middleware.js"

const router = express.Router();

router.post("/submit", upload.single('coverImage'), submitForm);

 router.get("/blogs", fetchEntries);

 router.delete("/entries/:id", deleteEntry);

export default router;
