import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { requestAPI } from "../../../requests/core/request";
import server_config from "../../../../server.config";
import REQUEST_API from "../../../requests/api.config";
import UserEntity from "../../domains/entities/UserEntity";

export const createUser = createAsyncThunk<any, any>(
  "user/createUser",
  async (userDetails) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify(userDetails);
    return await requestAPI(
      `${server_config.host}:${server_config.port}/${REQUEST_API.CREATE_USER}`,
      "POST",
      raw,
      myHeaders
    );
  }
);

export const getUser = createAsyncThunk<any, any>(
  "user/getUser",
  async (id, { rejectWithValue }) => {
    try {
      const response = await requestAPI(
        `${server_config.host}:${server_config.port}/${REQUEST_API.GET_USER}?governmentId=${id}`,
        "GET"
      );
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const addAsset = createAsyncThunk<any, any>(
  "user/addAsset",
  async ({ assetId, userId }, { rejectWithValue }) => {
    try {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify({
        assetId: assetId,
      });

      var requestOptions: any = {
        method: "PUT",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      const result = await fetch(
        `http://127.0.0.1:8080/api/v1/user/addAsset?governmentId=${userId}`,
        requestOptions
      )
        .then((response) => response)
        .then((result) => result.json())
        .catch((error) => rejectWithValue(error));
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const addToken = createAsyncThunk<any, any>(
  "user/addToke",
  async ({ tokenId, userId }, { rejectWithValue }) => {
    try {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify({
        tokenId: tokenId,
      });

      var requestOptions: any = {
        method: "PUT",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      return await fetch(
        `http://127.0.0.1:8080/api/v1/user/addToken?governmentId=${userId}`,
        requestOptions
      )
        .then((response) => response)
        .then((result) => result.json())
        .catch((error) => console.log("error", error));
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

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
      state.user = action.payload;
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
        state.user = action.payload;
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
        state.user = action.payload;
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
        state.user = action.payload;
      })
      .addCase(addToken.rejected, (state: any) => {
        state.loading = false;
        state.status = "failed";
        state.user = {};
      });
  },
});

export default userSlice.reducer;
