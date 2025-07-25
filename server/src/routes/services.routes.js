import express from "express";
import multer from "multer";
import {
  getAllServices,
  getServiceById,
  createService,
  updateService,
  deleteService,
} from "../controllers/services.controller.js";

const router = express.Router();
const upload = multer({
  dest: "uploads/",
  limits: { fileSize: 5 * 1024 * 1024 },
}); // 5MB limit

router.get("/", getAllServices);
router.get("/:id", getServiceById);
router.post("/", upload.single("icon"), createService); // expects 'icon' field in form-data
router.put("/:id", upload.single("icon"), updateService); // for updating service icon
router.delete("/:id", deleteService);

export default router;
