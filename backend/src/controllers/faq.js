import faq from "../models/faq.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import errorResponse from "../utils/errorResponse.js";

export const newFaq = asyncHandler(async (req, res, next) => {
  const newFaq = new faq(req?.body);
  await newFaq.save();
  res.status(201).json({ status: true, message: "Faq created succesfully!!" });
});

export const getAllFaq = asyncHandler(async (req, res, next) => {
  const faqData = await faq.find();
  res.status(200).json({ status: true, data: faqData });
});

export const deleteFaq = asyncHandler(async (req, res, next) => {
  try {
    const { id } = req?.params;
    const isValidId = await faq.findByIdAndDelete(id);
    if (!isValidId) {
      return res.status(404).json({ status: false, message: "data not found" });
    }
    res.status(200).json({ status: true, message: "Faq deleted successfully!!" });
  } catch (error) {
    res.status(400).json({
      status: false,
      message: error?.message || "Internal server error",
    });
  }
  
});
