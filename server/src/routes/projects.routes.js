import express from "express";
import multer from "multer";
import {
  getAllProjects,
  getProjectById,
  createProject,
  updateProject,
  deleteProject,
} from "../controllers/projects.controller.js";

const router = express.Router();
const upload = multer({
  dest: "uploads/",
  limits: { fileSize: 5 * 1024 * 1024 },
}); // 5MB limit

router.get("/", getAllProjects);
router.get("/:id", getProjectById);
router.post("/", upload.single("image"), createProject); // expects 'image' field in form-data
router.patch("/:id", upload.single("image"), updateProject); // for updating project image
router.delete("/:id", deleteProject);

export default router;
