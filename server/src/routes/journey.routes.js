import express from "express";
import multer from "multer";
import {
  getAllJourneys,
  getJourneyById,
  createJourney,
  updateJourney,
  deleteJourney,
} from "../controllers/journey.controller.js";

const router = express.Router();
const upload = multer({
  dest: "uploads/",
  limits: { fileSize: 5 * 1024 * 1024 },
}); // 5MB limit

router.get("/", getAllJourneys);
router.get("/:id", getJourneyById);
router.post("/", upload.single("image"), createJourney); // expects 'image' field in form-data
router.put("/:id", upload.single("image"), updateJourney); // for updating journey image
router.delete("/:id", deleteJourney);

export default router;
