import  express from "express";
import { authGuard } from "../../middlewares/authGuard";
import { UserController } from "./user.controller";

const router = express.Router();

router.get("/all", authGuard(["admin"]), UserController.getAllUser);
router.patch("/block/:id", authGuard(["admin"]),UserController.blockUser);
router.patch("/unblock/:id", authGuard(['admin']), UserController.unblockUser);

export const userRoutes = router;