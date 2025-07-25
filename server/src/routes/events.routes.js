import express from "express";
import multer from "multer";
import {
  getAllEvents,
  getEventById,
  createEvent,
  updateEvent,
  deleteEvent,
} from "../controllers/events.controller.js";

const router = express.Router();
const upload = multer({
  dest: "uploads/",
  limits: { fileSize: 5 * 1024 * 1024 },
}); // 5MB limit

router.get("/", getAllEvents);
router.get("/:id", getEventById);
router.post("/", upload.fields([{ name: "image", maxCount: 1 }]), createEvent); // expects only 'image' field in form-data
router.patch(
  "/:id",
  upload.fields([{ name: "image", maxCount: 1 }]),
  updateEvent
); // for updating event image
router.delete("/:id", deleteEvent);

export default router;
