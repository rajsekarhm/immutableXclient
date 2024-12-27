// // Helper function to create headers
// function createHeaders(contentType = "application/json") {
//   const headers = new Headers();
//   headers.append("Content-Type", contentType);
//   return headers;
// }

// // Helper function for fetch requests
// async function makeRequest(url, method = 'GET', body = null, contentType = "application/json") {
//   const requestOptions = {
//     method,
//     headers: createHeaders(contentType),
//     body: body ? JSON.stringify(body) : null,
//     redirect: 'follow'
//   };

//   try {
//     const response = await fetch(url, requestOptions);
//     const result = await response.text();
//     console.log(result);
//     return result;
//   } catch (error) {
//     console.error('error', error);
//     throw error;
//   }
// }

// // API Endpoints
// const API_BASE_URL = "http://127.0.0.1:8080/api/v1";

// // Usage examples

// // GET: Fetch user by government ID
// // makeRequest(`${API_BASE_URL}/user/getUser?governmentId=6382`);

// // // POST: Create a new user
// // makeRequest(`${API_BASE_URL}/user/createUser`, 'POST', {
// //   firstName: "raj",
// //   lastName: "sekar",
// //   email: "rajasekar.haribalan333@gmail.com",
// //   isAgent: false,
// //   phoneNumber: "6382646689",
// //   edition: "freee",
// //   isAuthForBuyAndSell: false,
// //   governmentID: 6382,
// //   location: "india",
// //   securityId: "6382",
// //   assetIds: [110],
// //   tokenIds: []
// // });

// // // PUT: Add asset to a user
// // makeRequest(`${API_BASE_URL}/user/addAsset?governmentId=6382`, 'PUT', { assetId: "120" });

// // // PUT: Add token to a user
// // makeRequest(`${API_BASE_URL}/user/addToken?governmentId=6382`, 'PUT', { tokenId: "69" });

// // PUT: Remove asset from a user
// makeRequest(`${API_BASE_URL}/user/removeAsset?governmentId=6382`, 'PUT', { assetId: "110" });

// // POST: Create a new asset
// makeRequest(`${API_BASE_URL}/asset/createAsset`, 'POST', {
//   assetId: "120",
//   symbol: "TVK",
//   assetURI: "http://127.0.0.1:5173/asset-digitalize/6382",
//   value: "100",
//   assetAddress: "0x212f916DCfF88AC66883a2175de5BDa52C6bA968",
//   isValidated: false,
//   associatedUser: "6382",
//   isForSale: false,
//   isFungible: "false"
// });

// // GET: Fetch asset by asset ID
// makeRequest(`${API_BASE_URL}/asset/getAsset?assetId=120`);

// // PUT: Change associate user of an asset
// makeRequest(`${API_BASE_URL}/asset/changeAssociateUser?assetId=17710`, 'PUT', { userId: "9090" });

// // POST: Create a new token
// makeRequest(`${API_BASE_URL}/token/createToken`, 'POST', {
//   walletAddress: "0x212f916DCfF88AC66883a2175de5BDa52C6bA968",
//   tokenName: "TokenName",
//   tokenId: "69",
//   symbol: "TOK",
//   numberOfTokens: "10"
// });

// // GET: Fetch token by token ID
// makeRequest(`${API_BASE_URL}/token/getToken?tokenId=69`);
