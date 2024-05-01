import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../../services/axiosInterceptor';

//get all faq api
export const getAllFaqs = createAsyncThunk(
  'getFaq',
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await instance.get('/faq', payload, {
        withCredentials: false,
      });

      return data;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

//delete faq api
export const deleteFaq = createAsyncThunk(
  'deleteFaq',
  async (id, { rejectWithValue }) => {
    try {

      const response = await instance.delete(
        `/faq/${id}`,

        { withCredentials: false }
      );
      return response;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

//update Faq api
export const updateFaq = createAsyncThunk(
  'updateFaq',
  async ({ id, payload }, { rejectWithValue }) => {
    try {
      const response = await instance.patch(`/faq/${id}`, payload, {
        withCredentials: false,
      });
      return response;
    } catch (e) {
      return rejectWithValue;
    }
  }
);

//create Faq api
export const createFaq = createAsyncThunk(
  'createFaq',
  async (payload,{ rejectWithValue }) => {
    try {
      const response = await instance.post(`/faq`, payload, {
        withCredentials: false
      });
      return response;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);
