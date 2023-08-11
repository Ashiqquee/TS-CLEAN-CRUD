import mongoose, { Document, Schema } from "mongoose";


export interface UserInterface extends Document {
    username : string
    email:string
    phone:number
    password:string
};


const userSchema: Schema = new Schema({
  username: {
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
  password: {
    type: String,
    required: true,
  },

});

export default mongoose.model<UserInterface>('user',userSchema);

