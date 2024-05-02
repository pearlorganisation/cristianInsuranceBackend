import blogs from "../models/blogs.js";
import { asyncHandler } from "../utils/asyncHandler.js";

// @desc - new blog
// @route - POST api/v1/blog
export const newBlog = asyncHandler(async (req, res, next) => {
  const newDoc = await blogs.create({
    ...req?.body,
    banner: req?.file?.path,
  });
  // const data = await newDoc.save();
  res.status(201).json({ status: "true", message: "Created successfully!!" });
});



// @desc - update blog
// @route - POST api/v1/blog
export const updateBlog = asyncHandler(async (req, res, next) => {

  const {id} =req?.params
  const {title,description} = req?.body


const existingData= await blogs.findById(id)
if (!existingData) return next(new errorResponse("No data found!!", 400));

  const isValidId = await blogs.findByIdAndUpdate(id,{
    banner: req?.file?.path || existingData?.banner,
title,description }
  );
 
res.status(200).json({ status: true, message: "Updated successfully!!",isValidId });
});

// @desc - get all blogs
// @route - get api/v1/blogs
export const getAllBlog = asyncHandler(async (req, res, next) => {
  const data = await blogs.find();
  res.status(200).json({
    status: true,
    message:
      data?.length >= 1 ? "Data found successfully!!" : "No data found!!",
    data,
  });
});

// @desc - delete existing blog
// @route - DELETE api/v1/blog/:id
export const deleteBlog = async (req, res) => {
  try {
    const isValidId = await blogs.findByIdAndDelete(req?.params?.id);
    if (!isValidId) {
      return res.status(404).json({ status: false, message: "Blog not found" });
    }
    res.status(200).json({ status: true, message: "Deleted successfully!!" });
  } catch (error) {
    res.status(400).json({
      status: false,
      message: error?.message || "Internal server error",
    });
  }
};
