import createError from "../../../utils/createError.js";
import Service from "../models/Service.js";

//GET all services
//Filter categories, prices, title search queries, user
export const getServices = async (req, res, next) => {
  const q = req.query;

  //Filters
  const filters = {
    //category
    //If there is a query category, spread object
    //If no category, continue
    ...(q.category && {category: q.category}),
    //price(min and max)
    ...((q.min || q.max) && {price:{
      //min
      ...(q.min && {$gt: q.min}),
      //max
      ...(q.max && {$lt: q.max}),
      },
    }),
    //search title
    ...(q.search && {title: { $regex: q.search, $options: "i" } }),
    //userId filter
    ...(q.userId && { userId: q.userId }),
  };

  try {
    const services = await Service.find(filters).sort({ [q.sort]: -1 });
    res.status(200).send(services)
  } catch (err) {
    next(err);
  }

};

//GET one service
export const oneService = async (req, res, next) => {

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