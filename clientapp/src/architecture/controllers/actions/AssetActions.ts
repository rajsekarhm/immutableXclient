import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AssetRepository from "../../applications/infrastructure/AssetRepository";

export const createAssetBlockchain = createAsyncThunk<any, any>(
  "asset/createAssetBlockChain",
   (assetDetails,{rejectWithValue}) => {
    return AssetRepository.createAssetOnChain(assetDetails,{rejectWithValue})
  }
);

export const getAssetBlockchain = createAsyncThunk<any, any>(
  "asset/getAssetBlockchain",
  async ({ asserAddress, assetId }, { rejectWithValue }) => {
    return AssetRepository.getAssetOnChain({asserAddress,assetId:assetId},{rejectWithValue})
  }
);

export const createAsset = createAsyncThunk<any, any>(
  "asset/createAsset",
  async (assetDetails,{rejectWithValue}) => {
    return AssetRepository.createAsset(assetDetails,{rejectWithValue})
  }
);

export const getAsset = createAsyncThunk<any, any>(
  "asset/getAsset",
   async ({ asserAddress, assetIds }, { rejectWithValue }) => {
    return AssetRepository.getAssetById(assetIds,{rejectWithValue})
  }
);

const assetSlice = createSlice({
  name: "asset",
  initialState: {
    asset: {},
    loading: false,
    status: "idle",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAsset.pending, (state: any) => {
      state.status = "idle";
      state.loading = true;
      state.asset = {};
    });
    builder.addCase(getAsset.fulfilled, (state: any, action: any) => {
      state.status = "succeeded";
      state.loading = false;
      state.asset = action.payload;
    });
    builder.addCase(getAsset.rejected, (state: any, action: any) => {
      state.status = "failed";
      state.loading = false;
      state.asset = {};
    });
    
    builder
      .addCase(createAsset.pending, (state: any) => {
        state.loading = true;
        state.status = "idle";
        state.asset = {};
      })
      .addCase(createAsset.fulfilled, (state: any, action: any) => {
        state.loading = false;
        state.status = "succeeded";
        state.asset = action.payload;
      })
      .addCase(createAsset.rejected, (state: any, action: any) => {
        state.loading = false;
        state.status = "failed";
        state.asset = {};
      });
  },
});

export default assetSlice.reducer;
