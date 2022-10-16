import express from 'express';
import {
  createBus,
  deleteBus,
  getBus,
  getBuss,
  updateBus
  // updateBusAvailability,
} from "../controllers/bus.js";
import { verifyAdmin } from "../utils/verifyToken.js";


const router = express.Router();
//CREATE
router.post("/:tripid",verifyAdmin,createBus);

//UPDATE
// router.put("/availability/:id", updateBusAvailability);
router.put("/:id", verifyAdmin,updateBus);
//DELETE
router.delete("/:id/:tripid", verifyAdmin,deleteBus);
//GET

router.get("/:id", getBus);
//GET ALL

router.get("/", getBuss);

export default router;