import mongoose from "mongoose";

const connectToDB = async() : Promise<void> => {
    try {
      await mongoose.connect("mongodb://127.0.0.1:27017/TS-CLEAN-CRUD");
      console.log("database connected");
    } catch (error) {
      console.error(error);
    }
}


export default connectToDB ;