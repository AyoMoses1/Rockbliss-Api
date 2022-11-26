import Customer from "../models/Customer.js";
import nodemailer from "nodemailer"

export const bookCustomer = async(req, res, next) => {
   const newUser = new Customer(req.body)
   try{
     const savedCustomer = await newUser.save()
     res.status(200).json(savedCustomer)
     let mailTransporter = nodemailer.createTransport({
       service: 'gmail',
       auth: {
         user: "ayocandy1@gmail.com",
         pass: "lqhzopnbdxtmvfrb"
       }
     })
     
     let details = {
       from : "ayocandy1@gmail.com",
       to : "ayomoses111@gmail.com",
       subject: "testing gmail nodemailer functionality that is preinstalled",
       text : "This is the first email I am sending from a backend provider"
     }
     
     mailTransporter.sendMail(details, (err) => {
       if(err){
         console.log("Error: ", err)
       }
       else{
         res.send("Email sent successfully!!!")
       }
     })
   } catch(err){
     next(err)
   }
 }