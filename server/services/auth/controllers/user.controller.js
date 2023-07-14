import createError from "../../../utils/createError.js";
import User from "../models/User.js";

//DELETE User
export const deleteUser = async (req, res, next) => {

  const user = await User.findById(req.params.id);

  if (req.userId !== user._id.toString()) {
    return next(createError(403, "You can delete only your account!"));
  }
    
  await User.findByIdAndDelete(req.params.id);
  res.status(200).send("Deleted")
};

//GET User
export const getUser = async (req, res, next) => {
  const user = await User.findById(req.params.id);

  res.status(200).send(user);
};