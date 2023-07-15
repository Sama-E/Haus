import createError from "../../../utils/createError.js";
import Service from "../models/Service.js";

//GET all services
export const getServices = (req, res) => {

  try {

  } catch (err) {
    next(err);
  }

};

//GET one service
export const oneService = async (req, res) => {

  try {
    const oneService = await Service.findById(req.params.id);
    
    if(!oneService)
      return next(createError(404, "No service found."));
    res.status(200).send(oneService);
  } catch (err) {
    next(err);
  }

};

//POST new service
export const newService = async (req, res, next) => {
  if(!req.isSeller) 
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
export const deleteService = async (req, res, next) => {
  try {
    const service = await Service.findById(req.params.id);
    if (service.userId !== req.userId)
      return next(createError(403, "You can delete only your service!"));

    await Service.findByIdAndDelete(req.params.id);
    res.status(200).send("Service has been deleted!");
  } catch (err) {
    next(err);
  }
};