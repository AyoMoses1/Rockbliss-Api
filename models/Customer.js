import mongoose from "mongoose";

const CustomerSchema = new mongoose.Schema({
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
      type: Number,
      required: true,
    },
    address: {
      type: String,
    },
    city: {
      type: String,
    },
    country: {
      type: String,
    },
    zip: {
      type: Number,
    },
    request: {
      type: String,
    },
  },
  {timestamps :true}
  );
  
  export default mongoose.model("Customer", CustomerSchema)