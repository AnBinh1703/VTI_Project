import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const brandApi = 'http://localhost:8080/api/v1/brand';
const categoryApi = 'http://localhost:8080/api/v1/categories';

export const getAllBrand = createAsyncThunk("fetchAllBrand", async () => {
  try {
    const response = await axios.get(brandApi);
    return response.data;
  } catch (error) {
    // Handle errors as needed
    console.error("Error fetching brands:", error);
    throw error;
  }
});

export const getAllCategory = createAsyncThunk("fetchAllCategories", async () => {
  try {
    const response = await axios.get(categoryApi);
    return response.data;
  } catch (error) {
    // Handle errors as needed
    console.error("Error fetching categories:", error);
    throw error;
  }
});

export const RecalApiLoading = createSlice({
  name: 'apiSave',
  initialState: {
    responApiBrand: null,
    responApiCategory: null,
  },
  reducers: {
    // Remove if not used
  },
  extraReducers: (builder) => {
    builder.addCase(getAllBrand.fulfilled, (state, action) => {
      state.responApiBrand = action.payload;
    });
    builder.addCase(getAllCategory.fulfilled, (state, action) => {
      state.responApiCategory = action.payload;
    });
  }
});

export const { callApi } = RecalApiLoading.actions;
export default RecalApiLoading.reducer;
