import { createSlice } from '@reduxjs/toolkit';


import toast from 'react-hot-toast';
import { createFaq, deleteFaq, getAllFaqs, updateFaq } from '../actions/faq';

const initialState = {
  isLoading: false,
  isUpdated: false,
  isSuccess: false,
  isDeleted: false,
  errorMessage: '',
  faqData: [],
};

const faqSlice = createSlice({
  name: 'faq',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // signUp lifecycle methods
      .addCase(getAllFaqs.pending, (state, action) => {
        state.isLoading = true;
        state.errorMessage = '';
        
      })
      .addCase(getAllFaqs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isDeleted = false;
        state.errorMessage = '';
   state.faqData = action.payload?.data;
  
      })
      .addCase(getAllFaqs.rejected, (state, action) => {
        state.isLoading = false;
       
        state.errorMessage = action.payload;
      })
      .addCase(deleteFaq.pending, (state, action) => {
        state.isLoading = true;
        state.isDeleted = false;
      })
      .addCase(deleteFaq.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isDeleted = true;
        state.faqData = state.faqData.filter(
          (faq) => faq._id !== action?.payload?.payload
        );
        toast.success("Faq Deleted successfully", {
          position: "top-right",
         }); 
      })
      .addCase(deleteFaq.rejected, (state, action) => {
        state.isLoading = false;
        state.isDeleted = false;
        state.errorMessage = action.payload;
        toast.error(state?.errorMessage, {
          position: "top-right",
        });
        
      })
      .addCase(updateFaq.pending, (state, action) => {
        state.isLoading = true;
        state.isUpdated = false;
      })
      .addCase(updateFaq.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isUpdated = true;
        state.faqData = action.payload?.data
        toast.success("Faq Updated successfully", {
          position: "top-right",
         }); 
      })
  
      .addCase(updateFaq.rejected, (state, action) => {
        state.isLoading = false;
        state.isUpdated = false;
      
        state.errorMessage = action.payload;
        toast.error(state?.errorMessage, {
          position: "top-right",
        });
        
      })

      .addCase(createFaq.pending, (state, action) => {
        state.isLoading = true;
        state.isUpdated = false;
      })
      .addCase(createFaq.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isUpdated = true;
        state.faqData = action.payload?.data
        toast.success("Faq created successfully", {
          position: "top-right",
         }); 
      })
   
      .addCase(createFaq.rejected, (state, action) => {
        state.isLoading = false;
        state.isUpdated = false;
        state.errorMessage = action.payload
          ? action.payload
          : 'An error occurred while creating the faq.';
          toast.error(state?.errorMessage, {
            position: "top-right",
          });
          
      });
  },
});

export default faqSlice.reducer;
export const {} = faqSlice.actions;
