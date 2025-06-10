import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AssetRepository from "../../applications/infrastructure/AssetRepository";

// Async Thunks
export const createAssetBlockchain = createAsyncThunk(
  "asset/createAssetBlockchain",
  (assetDetails:any, { rejectWithValue }) =>
    AssetRepository.createAssetOnChain(assetDetails, { rejectWithValue })
);

export const getAssetBlockchain = createAsyncThunk(
  "asset/getAssetBlockchain",
  ({ asserAddress, assetId } : any, { rejectWithValue }) =>
    AssetRepository.getAssetOnChain({ asserAddress, assetId }, { rejectWithValue })
);

export const transferOwnerAsset = createAsyncThunk(
  "asset/transferOwnerAsset",
  ({ asset, newAddress, receiverId } : any, { rejectWithValue }) =>
    AssetRepository.transferOwnership(asset, newAddress, receiverId, { rejectWithValue })
);

export const createAsset = createAsyncThunk(
  "asset/createAsset",
  (assetDetails : any, { rejectWithValue }) =>
    AssetRepository.createAsset(assetDetails, { rejectWithValue })
);

export const getAsset = createAsyncThunk(
  "asset/getAsset",
  ({ assetIds } : any, { rejectWithValue }) =>
    AssetRepository.getAssetById(assetIds, { rejectWithValue })
);

// Initial State
const initialState = {
  asset: null,
  loading: false,
  status: "idle",
};

// Utility to generate reducers for async thunks
const addAsyncCases = (builder : any, thunk : any, options = { resetTo: null }) => {
  builder
    .addCase(thunk.pending, (state : any) => {
      state.loading = true;
      state.status = "idle";
      state.asset = options.resetTo;
    })
    .addCase(thunk.fulfilled, (state : any, action : any) => {
      state.loading = false;
      state.status = "succeeded";
      state.asset = action.payload?.data ?? null;
    })
    .addCase(thunk.rejected, (state : any) => {
      state.loading = false;
      state.status = "failed";
      state.asset = options.resetTo;
    });
};

// Slice
const assetSlice = createSlice({
  name: "asset",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    addAsyncCases(builder, getAsset, { resetTo: null });
    addAsyncCases(builder, createAsset, { resetTo: null });
    addAsyncCases(builder, createAssetBlockchain, { resetTo: null });
    addAsyncCases(builder, transferOwnerAsset, { resetTo: null });
  },
});

export default assetSlice.reducer;
