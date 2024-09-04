import express from "express";
import { submitForm , fetchEntries,  deleteEntry, fetchEntry} from "../controllers/userController.js";

const router = express.Router();

router.post("/submit", submitForm);

 router.get("/blogs", fetchEntries);
 router.get("/blogs/:id", fetchEntry);

 router.delete("/entries/:id", deleteEntry);

export default router;
