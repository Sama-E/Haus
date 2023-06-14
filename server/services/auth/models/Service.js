import mongoose from 'mongoose';
const { Schema } = mongoose;

const serviceSchema = new Schema({
  
},
{ timestamps: true
});

export default mongoose.model("Service", serviceSchema);