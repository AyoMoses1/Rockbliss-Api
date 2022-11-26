import express from "express"
import Hotel from "../models/Hotel.js";
import { deleteUser, getUser, getUsers, updateUser } from "../controllers/user.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();



// Customer's Booking


router.get("/checkauthentication", verifyToken, (req, res, next) => {
    res.send("Hello user you are authenticated")
})


router.get("/checkUser/:id", verifyUser, (req, res, next) => {
    res.send("hello user, you are logged in and you can delete your account")
})

router.get("/checkAdmin/:id", verifyAdmin, (req, res, next) => {
    res.send("hello admin, you are logged in and you can delete all accounts")
})

//UPDATE
router.put("/:id", verifyUser, updateUser);
//DELETE
router.delete("/:id", deleteUser );
//GET

// verifyUser was used here
router.get("/find/:id", verifyUser, getUser);
//GET ALL

router.get("/", verifyAdmin, getUsers)

// Please remember to update the get users verifyAdmin feature later



export default router