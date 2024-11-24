import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import ContractETH from "../contract/ContractETH";
import CONTRACT_ADDRESS_TESTNET from "../contract/Contract";
import asset_abi from "../../../blockchain_client/ethereum/abi/asset_abi";

export const createAsset = createAsyncThunk<any,any>("asset/createAsset", async (assetDetails) => {
    return {}
});

export const getAsset = createAsyncThunk<any, any>(
    "asset/getAsset", 
    async ({asserAddress,tokenId}, { rejectWithValue }) => {
        const _contract =  new ContractETH("browser",window.ethereum)
        const web = await _contract.interactWithContract(CONTRACT_ADDRESS_TESTNET,asset_abi)
        const sourceObject = await web.getHoldingAssetX(asserAddress,tokenId)
        return Object.assign({},{
            tokenId: sourceObject[0],
            value: sourceObject[1],
            tokenURI: sourceObject[2],
            isFungible: sourceObject[3],
            symbol: sourceObject[4],
            walletAddress: asserAddress,
          })
          
    }
  );



const assetSlice = createSlice({
  name: "asset",
  initialState: {
    asset:{},
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
      console.log(action)
      state.asset = action.payload;
    });
    builder.addCase(getAsset.rejected, (state: any, action: any) => {
      state.status = "failed";
      state.loading = false;
      state.asset = {};
    });
    /*********** */
    builder
    .addCase(createAsset.pending, (state:any) => {
      state.loading = true;
      state.status = "idle";
      state.asset = {};
    })
    .addCase(createAsset.fulfilled, (state:any,action:any) => {
      state.loading = false;
      state.status = "succeeded";
      state.asset = action.payload
    })
    .addCase(createAsset.rejected, (state:any,action:any) => {
      state.loading = false;
      state.status = "failed";
      state.asset = {};
    });
  },
});

export default assetSlice.reducer;
