import mongoose from 'mongoose';
const { Schema } = mongoose;

const conversationSchema = new Schema({
  id:{
    type: String,
    required: true,
    unique: true,
  },
  sellerId:{
    type: String,
    required: true,
  },
  buyerId:{
    type: String,
    required: true,
  },
  readBySeller:{
    type: Boolean,
    default: true,
  },
  readByBuyer:{
    type: Boolean,
    default: true,
  },
  lastMessaege:{
    type: String,
    default: false,
  },
  


},
{ timestamps: true
});

export default mongoose.model("Conversation", conversationSchema);