const { ethers, verifyMessage } = require("ethers");
export async function verifySign(address, msg) {
  const eth = new ethers.BrowserProvider(window.ethereum);
  await eth.send("eth_requestAccounts", []);
  const signer = await eth.getSigner();
  const signature = await signer.signMessage(msg);
  const signeed = verifyMessage(msg, signature);

  if (signeed.toLowerCase() === address.toLowerCase()) {
    console.log("Signature is valid.");
  } else {
    console.log("Signature is not valid.");
  }
}
