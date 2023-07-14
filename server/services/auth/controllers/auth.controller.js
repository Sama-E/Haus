import jwt from "jsonwebtoken";
import User from "../models/User.js";
import bcrypt from "bcrypt";
import createError from "../../../utils/createError.js";

//REGISTER
export const register = async (req, res, next) => {

  try{
    //New User
    //Hash Password with Bcrypt
    const hash = bcrypt.hashSync(req.body.password, 5);
    const newUser = new User({
      ...req.body,
      password: hash,
    });

    await newUser.save();
    res.status(201).send("User has been created.")
  }catch(err){
    next(err);
  }
}


//LOGIN
export const login = async (req, res, next) => {
  try{
    //Find user
    const user = await User.findOne({username: req.body.username});
    if (!user) return next(createError(404, "User not found!"));

    //If user doesn't exist
    if(!user) return next(err);
    //Check Password
    const isCorrect = bcrypt.compareSync(req.body.password, user.password);
    //If user input password is wrong
    if(!isCorrect) return next(createError(400, "Wrong password or username!"));
    
    //Successful login - send user credentials 

    //Token
    const token = jwt.sign({
      id: user._id,
      isSeller: user.isSeller
    }, process.env.JWT_KEY
    );

    //To homepage w/out password
    const {password, ...info} = user._doc
    res
      .cookie("accessToken", token, {
        httpOnly:true,
      })
      .status(200)
      .send(info);
  } catch(err) {

    res.status(500).send("Something went wrong")
  }

}


//LOGOUT
export const logout = async (req, res) => {
  res
    .clearCookie("accessToken", {
      sameSite: "none",
      secure: true,
    })
    .status(200)
    .send("User has been logged out.");
};