import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../../services/axiosInterceptor';

//get all blog api
export const getAllBlogs = createAsyncThunk(
  'getBlog',
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await instance.get('/blogs', payload, {
        withCredentials: false,
      });

      return data;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

//delete blog api
export const deleteBlog = createAsyncThunk(
  'deleteBlog',
  async (id, { rejectWithValue }) => {
    try {

      const response = await instance.delete(
        `/blogs/${id}`,

        { withCredentials: false }
      );
      return response;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

//update Blog api
export const updateBlog = createAsyncThunk(
  'updateBlog',
  async ({ id, payload }, { rejectWithValue }) => {
    try {
      const response = await instance.patch(`/blogs/${id}`, payload, {
        withCredentials: false,
        headers: {
            'Content-type': 'multipart/form-data',
          },
      });
      return response;
    } catch (e) {
      return rejectWithValue;
    }
  }
);

//create Blog api
export const createBlog = createAsyncThunk(
  'createBlog',
  async (formData , { rejectWithValue }) => {
    try {
      const response = await instance.post(`/blogs`, formData, {
        withCredentials: false,
        headers: {
          'Content-type': 'multipart/form-data',
        },
      });
      return response;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);
