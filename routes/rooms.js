import express from "express"
import { createRoom, updateRoom, deleteRoom, getRoom, getRooms, updateRoomAvailability } from "../controllers/room.js";
import { verifyAdmin } from "../utils/verifyToken.js"

const router = express.Router();


//CREATE
router.post("/:hotelId", verifyAdmin, createRoom);

//UPDATE
router.put("/:id", verifyAdmin, updateRoom);

// router.put("/availability/:id",verifyAdmin, updateRoomAvailability)

router.put("/availability/:id", updateRoomAvailability)
//DELETE
router.delete("/:id/:hotelid",verifyAdmin, deleteRoom);
//GET

router.get("/find/:id", getRoom);
//GET ALL


router.get("/", getRooms);

export default router