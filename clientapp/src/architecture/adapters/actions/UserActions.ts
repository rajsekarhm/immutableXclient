import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import UserEntity from "../../domains/entities/UserEntity";
import UserRepository from "../../applications/infrastructure/UserRepository";

export const createUser = createAsyncThunk<any, any>(
  "user/createUser",
   (userDetails,{ rejectWithValue }) => {
    return UserRepository.createUser(userDetails,rejectWithValue)
  }
);

export const getUser = createAsyncThunk<any, any>(
  "user/getUser",
   (id, { rejectWithValue }) => {
    return UserRepository.getUserById(id,{rejectWithValue})
  }
);

export const addAsset = createAsyncThunk<any, any>(
  "user/addAsset",
   ({ assetId, userId }, { rejectWithValue }) => {
    return UserRepository.addAssetToUser({assetId,userId},{rejectWithValue})
  }
);

export const addToken = createAsyncThunk<any, any>(
  "user/addToken",
  ({ tokenId, userId }, { rejectWithValue }) => {
    return UserRepository.addTokenToUser({tokenId,userId},{rejectWithValue})
  }
);

export const removeAsset = createAsyncThunk<any,any>("user/removeAsset",async ({assetId,userId},{rejectWithValue})=>{
  return UserRepository.removeAssetUser({assetId,userId},{rejectWithValue})
})

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: UserEntity.initialState(),
    loading: false,
    status: "idle",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUser.pending, (state: any) => {
      state.status = "idle";
      state.loading = true;
      state.user = UserEntity.initialState();
    });
    builder.addCase(getUser.fulfilled, (state: any, action: any) => {
      state.status = "succeeded";
      state.loading = false;
      const userData = action.payload?.data ?? null;
      if (!userData.user) {
        state.user = null;
        state.error = "NOT_FOUND"; 
      } else {
        state.user = userData;
        state.error = null;
      }
    });
    builder.addCase(getUser.rejected, (state: any) => {
      state.status = "failed";
      state.loading = false;
      state.user = UserEntity.initialState();
    });

    builder
      .addCase(createUser.pending, (state: any) => {
        state.loading = true;
        state.status = "idle";
        state.user = UserEntity.initialState();
      })
      .addCase(createUser.fulfilled, (state: any, action: any) => {
        state.loading = false;
        state.status = "succeeded";
        state.user = action.payload.data;
      })
      .addCase(createUser.rejected, (state: any) => {
        state.loading = false;
        state.status = "failed";
        state.user = UserEntity.initialState();
      });

    builder
      .addCase(addAsset.pending, (state: any) => {
        state.loading = true;
        state.status = "idle";
        state.user = {};
      })
      .addCase(addAsset.fulfilled, (state: any, action: any) => {
        state.loading = false;
        state.status = "succeeded";
        state.user = action.payload.data;
      })
      .addCase(addAsset.rejected, (state: any) => {
        state.loading = false;
        state.status = "failed";
        state.user = {};
      });

      builder
      .addCase(addToken.pending, (state: any) => {
        state.loading = true;
        state.status = "idle";
        state.user = {};
      })
      .addCase(addToken.fulfilled, (state: any, action: any) => {
        state.loading = false;
        state.status = "succeeded";
        state.user = action.payload.data;
      })
      .addCase(addToken.rejected, (state: any) => {
        state.loading = false;
        state.status = "failed";
        state.user = {};
      });
  },
});

export default userSlice.reducer;
