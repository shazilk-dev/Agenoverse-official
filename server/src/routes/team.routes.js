import express from "express";
import multer from "multer";
import {
  getAllTeams,
  getTeamById,
  createTeam,
  updateTeam,
  deleteTeam,
} from "../controllers/team.controller.js";

const router = express.Router();
const upload = multer({
  dest: "uploads/",
  limits: { fileSize: 5 * 1024 * 1024 },
}); // 5MB limit

router.get("/", getAllTeams);
router.get("/:id", getTeamById);
router.post("/", upload.single("photoUrl"), createTeam); // expects 'photoUrl' field in form-data
router.put("/:id", upload.single("photoUrl"), updateTeam); // for updating team member photo
router.delete("/:id", deleteTeam);

export default router;
