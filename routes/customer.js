import express from "express"
import { bookCustomer } from './../controllers/customer.js';

const router = express.Router();


router.post("/checkout", bookCustomer)


export default router