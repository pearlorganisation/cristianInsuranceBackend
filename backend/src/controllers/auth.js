import auth from "../models/auth.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import bcrypt from "bcrypt";
import errorResponse from "../utils/errorResponse.js";

export const signup = asyncHandler(async (req, res, next) => {
  console.log("hellololo ");
  const { password } = req?.body;
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, 10);
  const newData = new auth({ ...req?.body, password: hashedPassword });
  const savedData = await newData.save();
  res
    .status(201)
    .json({ status: true, message: "Created successfully!!", newData });
});

// @desc - log in
// @route - POST api/v1/auth/login
export const login = asyncHandler(async (req, res, next) => {
  const { email, password } = req?.body;
  const isDataExists = await auth.findOne({
    $or: [{ email }, {}],
  });
  if (!isDataExists) return next(new errorResponse("No user found!!", 400));
  const isValidPassword = await bcrypt.compare(
    password,
    isDataExists?.password
  );
  if (isDataExists?.password != password) {
    return next(new errorResponse("Wrong password!! please try again", 400));
  }

  res.status(200).json({ status: true, message: "Logged in successfully!!" });
});
