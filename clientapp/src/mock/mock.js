const express = require('express');
const cors = require("cors");

const assetMock = require('./AssetMock');
const userMock = require('./usersMock');
const tokenMock = require('./tokenMock');

const app = express();
const port = 8080;

app.use(cors());
app.use(express.json());

// USER APIs
app.post('/api/v1/user/createUser', (req, res) => {
  res.json(userMock);
});

app.put('/api/v1/user/addAsset', (req, res) => {
  const { assetId } = req.body;
  const { securityId } = req.query;
  console.log("addAsset ->", { securityId, assetId });
  res.json({ message: 'Asset added to user', ...userMock });
});

app.put('/api/v1/user/addToken', (req, res) => {
  const { tokenId } = req.body;
  const { government } = req.query;
  console.log("addToken ->", { government, tokenId });
  res.json({ message: 'Token added to user', ...userMock });
});

app.post('/api/v1/user/getUser', (req, res) => {
  const { securityId } = req.query;
  console.log("getUser -> governmentId:", securityId);
  res.json(userMock);
});

app.put('/api/v1/asset/removeAsset', (req, res) => {
  const { assetId } = req.body;
  const { securityId } = req.query;
  console.log("removeAsset ->", { securityId, assetId });
  res.json({ message: 'Asset removed from user', ...userMock });
});

app.put('/api/v1/asset/changeAssociateUser', (req, res) => {
  const { userId } = req.body;
  const { assetId } = req.query;
  console.log("changeAssociateUser ->", { assetId, userId });
  res.json({ message: 'Associate user changed', ...userMock });
});

// ASSET APIs
app.post('/api/v1/asset/createAsset', (req, res) => {
  res.json(assetMock);
});

app.get('/api/v1/asset/getAsset', (req, res) => {
  const { assetId } = req.query;
  console.log("getAsset -> assetId:", assetId);
  res.json(assetMock);
});

// TOKEN APIs
app.post('/api/v1/token/createToken', (req, res) => {
  res.json(tokenMock);
});

app.get('/api/v1/token/getToken', (req, res) => {
  const { tokenId } = req.query;
  console.log("getToken -> tokenId:", tokenId);
  res.json(tokenMock);
});

app.listen(port, () => {
  console.log(`✅ Mock API listening at http://localhost:${port}`);
});
