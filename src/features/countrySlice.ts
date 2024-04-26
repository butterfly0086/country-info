import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../api/api';

export const fetchCountries = createAsyncThunk('country/fetch', async () => {
  const response = await api.get('/all');

  return response.data;
});

export const getCountryInfo = createAsyncThunk(
  'country/one',
  async (alpha: string) => {
    const response = await api.get(`/alpha/${alpha}`);

    return response.data;
  }
);

export const searchCountry = createAsyncThunk(
  'country/search',
  async (keyword: string) => {
    const response = await api.get(`/name/${keyword}`);

    return response.data;
  }
);

const countrySlice = createSlice({
  name: 'country',
  initialState: {
    isLoading: false,
    countries: [],
    country: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCountries.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchCountries.fulfilled, (state, action) => {
        state.countries = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchCountries.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(getCountryInfo.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCountryInfo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.country = action.payload;
      })
      .addCase(getCountryInfo.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(searchCountry.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(searchCountry.fulfilled, (state, action) => {
        state.isLoading = false;
        state.countries = action.payload;
      })
      .addCase(searchCountry.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export default countrySlice.reducer;
