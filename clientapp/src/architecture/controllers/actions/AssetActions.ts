import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { requestAPI } from "../../../requests/core/request";
import server_config from "../../../../server.config";
import REQUEST_API from "../../../requests/api.config";
import ContractETH from "../../contract/ContractETH";
import CONTRACT_ADDRESS_TESTNET from "../../contract/Contract";
import asset_abi from "../../../../blockchain_client/ethereum/abi/asset_abi";

export const createAsset = createAsyncThunk<any,any>("asset/createAsset", async (assetDetails) => {
        const {  
          tokenId,
          value,
          tokenURI,
          symbol,
          walletAddress
        } = assetDetails
      // safeMintX(address contractAddress, uint256 amount,uint256 tokenId,string memory uri,string memory  _symbol)
        const _contract =  new ContractETH("browser",window.ethereum)
        const web = await _contract.interactWithContract(CONTRACT_ADDRESS_TESTNET,asset_abi)
        const sourceObject = await web.safeMintX(walletAddress,value,tokenId,tokenURI,symbol)
       // var myHeaders = new Headers();
       // myHeaders.append("Content-Type", "application/json");
       // var raw = JSON.stringify(assetDetails);
       // return await requestAPI(`${server_config.host}:${server_config.port}/${REQUEST_API.CREATE_ASSET}`,"POST",raw,myHeaders);
});

export const getAsset = createAsyncThunk<any, any>(
    "asset/getAsset", 
    async ({asserAddress,tokenId}, { rejectWithValue }) => {
      // return await requestAPI(`${server_config.host}:${server_config.port}/${REQUEST_API.GET_ASSET}?tokenId=${tokenId}`,"GET")
    //     const _contract =  new ContractETH("browser",window.ethereum)
    //     const web = await _contract.interactWithContract(CONTRACT_ADDRESS_TESTNET,asset_abi)
    //     const sourceObject = await web.getHoldingAssetX(asserAddress,tokenId)
    //     return Object.assign({},{
    //         tokenId: sourceObject[0].toString(),
    //         value: sourceObject[1].toString(),
    //         tokenURI: sourceObject[2],
    //         isFungible: sourceObject[3],
    //         symbol: sourceObject[4],
    //         walletAddress: asserAddress,
    //       })
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
