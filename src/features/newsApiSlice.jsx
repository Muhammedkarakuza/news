//! shortcut rxslice
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  newsData: [],
  error: false,
  loading: false,
};

export const getNewsData = createAsyncThunk(
  "getNews", //! type
  async () => {
    const API_KEY = "2c076cc070ce489eaf09be641301c799";
    const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;
    const { data } = await axios(url);
    console.log(data.articles);
    return data.articles;
  } //! istek fonksiyonu
);

const newsApiSlice = createSlice({
  name: "newsApi",
  initialState,
  reducers: {
    clearNewsData: (state) => {
      state.newsData = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getNewsData.pending, (state) => {
        state.loading = true;
      })
      .addCase(getNewsData.fulfilled, (state, action) => {
        state.loading = false;
        state.newsData = action.payload;
      })
      .addCase(getNewsData.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export const { clearNewsData } = newsApiSlice.actions;

export default newsApiSlice.reducer;
