import express from "express"
import Hotel from "../models/Hotel.js";
import { countByCity,countByType, createHotel, deleteHotel, getHotel, getHotelRooms, getHotels, updateHotel, updateHotelAvailability } from "../controllers/hotel.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();


//CREATE
router.post("/", verifyAdmin, createHotel);

//UPDATE
router.put("/:id", verifyAdmin, updateHotel);
router.put("/availability/:id", updateHotelAvailability)
//DELETE
router.delete("/:id", verifyAdmin, deleteHotel);
//GET

router.get("/find/:id", getHotel);
//GET ALL


router.get("/", getHotels);
router.get("/countByCity", countByCity);
router.get("/countByType", countByType);
router.get("/room/:id", getHotelRooms)




export default router