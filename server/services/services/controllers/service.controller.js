import createError from "../../../utils/createError.js";
import Service from "../models/Service.js";

//GET all services
export const getServices = (req, res) => {

};

//GET one service
export const oneService = (req, res) => {

};

//POST new service
export const newService = async (req, res, next) => {
  if(!req.Seller) 
    return next(createError(403, "Only Seller can create a service!"));

  const newService = new Service({
    userId: req.userId,
    ...req.body,
  });

  try {
    const savedService = await newService.save();
    res.status(201).json(savedService);
  } catch (err) {
    next(err);
  }
};

//DELETE one services
export const deleteService = (req, res) => {

};