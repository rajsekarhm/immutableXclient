import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import TokenRepository from "../../applications/infrastructure/TokenRepository";

export const createTokenBlockchain = createAsyncThunk<any, any>(
  "token/createTokenBlockChain",
   (tokenDetails,{rejectWithValue}) => {
    TokenRepository.createTokenOnChain(tokenDetails,{rejectWithValue})
  }
);

export const getTokenBlockchain = createAsyncThunk<any, any>(
  "token/getTokenBlockchain",
   ({ tokenAddress, tokenId }, { rejectWithValue }) => {
    return TokenRepository.getTokenOnChain({tokenAddress,tokenId},{rejectWithValue})
  }
);

export const createToken = createAsyncThunk<any, any>(
  "token/createToken",
   (tokenDetails,{rejectWithValue}) => {
    return TokenRepository.createToken(tokenDetails,{rejectWithValue})
  }
);

export const getToken = createAsyncThunk<any, any>(
  "token/getToken",
   ({ tokenAddress, tokenIds }, { rejectWithValue }) => {
    return tokenIds ? TokenRepository.getTokenById(tokenIds,{rejectWithValue}) : {}
  }
);

const tokenSlice = createSlice({
  name: "token",
  initialState: {
    token: {},
    loading: false,
    status: "idle",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getToken.pending, (state: any) => {
      state.status = "idle";
      state.loading = true;
      state.token = [];
    });
    builder.addCase(getToken.fulfilled, (state: any, action: any) => {
      state.status = "succeeded";
      state.loading = false;
      state.token = null; //action.payload.data
    });
    builder.addCase(getToken.rejected, (state: any, action: any) => {
      state.status = "failed";
      state.loading = false;
      state.token = [];
    });


    builder
      .addCase(createToken.pending, (state: any) => {
        state.loading = true;
        state.status = "idle";
        state.token = [];
      })
      .addCase(createToken.fulfilled, (state: any, action: any) => {
        state.loading = false;
        state.status = "succeeded";
        state.token = action.payload.data;
      })
      .addCase(createToken.rejected, (state: any, action: any) => {
        state.loading = false;
        state.status = "failed";
        state.token = [];
      });

      builder
      .addCase(createTokenBlockchain.pending, (state: any) => {
        state.loading = true;
        state.status = "idle";
        state.token = null;
      })
      .addCase(createTokenBlockchain.fulfilled, (state: any, action: any) => {
        state.loading = false;
        state.status = "succeeded";
        state.token = {}  // action.payload.data;
      })
      .addCase(createTokenBlockchain.rejected, (state: any, action: any) => {
        state.loading = false;
        state.status = "failed";
        state.token = null;
      });
  },
});

export default tokenSlice.reducer;
