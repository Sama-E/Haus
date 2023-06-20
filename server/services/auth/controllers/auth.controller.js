import User from "../models/User.js";

//REGISTER
export const register = async (req, res) => {

  try{
    //New User
    const newUser = new User({
      username: "test",
      email:"test",
      password: "test",
      country: "test",
    });

    await newUser.save();
    res.status(201).send("User has been created.")
  }catch(err){
    res.status(500).send("Something went wrong")
  }
}


//LOGIN
export const login = async (req, res) => {

}


//LOGOUT
export const logout = async (req, res) => {


}