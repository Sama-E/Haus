import User from "../models/User.js";
import bcrypt from "bcrypt";

//REGISTER
export const register = async (req, res) => {

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

    res.status(500).send("Something went wrong")
  }
}


//LOGIN
export const login = async (req, res) => {
  try{
    //Find user
    const user = await User.findOne({username: req.body.username});
    //If user doesn't exist
    if(!user) return res.status(404).send("User not found!")
    //Check Password
    const isCorrect = bcrypt.compareSync(req.body.password, user.password);
    //If user input password is wrong
    if(!isCorrect) return res.status(400).send("Wrong username or password!");

    //Successful login - send user credentials 
    //To homepage w/out password
    const {password, ...info} = 
    res.status(200).send(info);
  } catch(err) {

    res.status(500).send("Something went wrong")
  }

}


//LOGOUT
export const logout = async (req, res) => {


}