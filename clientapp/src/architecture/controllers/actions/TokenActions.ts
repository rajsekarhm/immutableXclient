import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { requestAPI } from "../../../requests/core/request";
import server_config from "../../../../server.config";
import REQUEST_API from "../../../requests/api.config";
import ContractETH from "../../contract/ContractETH";
import CONTRACT_ADDRESS_TESTNET from "../../contract/Contract";
import token_abi from "../../../../blockchain_client/ethereum/abi/token_abi";


export const createAssetBlockchain = createAsyncThunk<any, any>(
    "asset/createTokenBlockChain",
    async (tokenDetails) => {
    }
  );
  
  export const getAssetBlockchain = createAsyncThunk<any, any>(
    "asset/getTokenBlockchain",
    async ({ tokenAddress, tokenId }, { rejectWithValue }) => {
    }
  );
  
  export const createToken = createAsyncThunk<any, any>(
    "asset/createToken",
    async (tokenDetails) => {
        var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify(tokenDetails);

var requestOptions:any = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

return await fetch("http://127.0.0.1:8080/api/v1/token/createToken", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
    }
  );
  
  export const getToken = createAsyncThunk<any, any>(
    "asset/getAsset",
     async ({ tokenAddress, tokenIds }, { rejectWithValue }) => {
        const tokenResponse = await Promise.all(tokenIds.map((id:any)=> requestAPI(`${server_config.host}:${server_config.port}/${REQUEST_API.GET_TOKEN}?tokenId=${id}`,"GET")) )
        return tokenResponse
    }
  );
  
  const tokenSlice = createSlice({
    name: "token",
    initialState: {
      asset: {},
      loading: false,
      status: "idle",
    },
    reducers: {},
    extraReducers: (builder) => {
      builder.addCase(getToken.pending, (state: any) => {
        state.status = "idle";
        state.loading = true;
        state.asset = {};
      });
      builder.addCase(getToken.fulfilled, (state: any, action: any) => {
        state.status = "succeeded";
        state.loading = false;
        state.asset = action.payload;
      });
      builder.addCase(getToken.rejected, (state: any, action: any) => {
        state.status = "failed";
        state.loading = false;
        state.asset = {};
      });
      /*********** */
      builder
        .addCase(createToken.pending, (state: any) => {
          state.loading = true;
          state.status = "idle";
          state.asset = {};
        })
        .addCase(createToken.fulfilled, (state: any, action: any) => {
          state.loading = false;
          state.status = "succeeded";
          state.asset = action.payload;
        })
        .addCase(createToken.rejected, (state: any, action: any) => {
          state.loading = false;
          state.status = "failed";
          state.asset = {};
        });
    },
  });
  
  export default tokenSlice.reducer;
  