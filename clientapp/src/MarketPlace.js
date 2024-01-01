import "./login.css";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import etherDone from "./etherCheck";
// const eth = new ethers.JsonRpcProvider(
//   "https://eth-sepolia.g.alchemy.com/v2/AxJV_qAMMt6cXXLiZuw2jV_t_q_3nPfV"
// );
const { ethers } = require("ethers");
const eth = new ethers.JsonRpcProvider(
  "https://eth-sepolia.g.alchemy.com/v2/AxJV_qAMMt6cXXLiZuw2jV_t_q_3nPfV"
);
const ListOfLands = JSON.parse(localStorage.getItem("listOfLands")) || [];

export default function ListedLand() {
  const navigate = useNavigate();
  const [blockNum, setBlockNum] = useState("");
  const urlParam = useParams();
  const moveDashBoard = () => {
    if (!urlParam.username == " ") {
      navigate(`/dashboard/${urlParam.username}`);
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="container center">
      <h1 className="text-center"style={{fontFamily:"monospace"}}>Market Place</h1>
      <div className="text-center">
        <button style={{fontFamily:"monospace"}} onClick={() => moveDashBoard()} className="btn btn-primary">
          {" "}
          Go to DashBoard
        </button>
      </div>
      <>
        <ListedLands listedLands={ListOfLands} setBlockNum={setBlockNum} />
      </>
      <h2> {blockNum}</h2>
    </div>
  );
}

function ListedLands(props) {
  const param = useParams()
  const navigate =  useNavigate()
  const handleCheck = async (land) =>{
    console.log(land.accountOwner,land.landAddress,land.price)
    if(!param.username){
      navigate('/login')
      return
    }
    if(!param.username != land.accountOwner){
      // await etherDone()
      const listOfLands = JSON.parse(localStorage.getItem("listOfLands")) || [];
      console.log(listOfLands)
      const index = listOfLands.findIndex(
        (landoneByone) => {
          return landoneByone.accountOwner === land.accountOwner
        }
      ); 
      listOfLands[index].isforSell = false
      listOfLands[index].accountOwner = param.username
      localStorage.setItem("listOfLands", JSON.stringify(listOfLands));
      window.location.reload();
    }
    
  }
  return props.listedLands.map((land) => {
    if (!land.isforSell || land.landAddress === " " && land.price === " " && land.landID === " ") {
      return;
    }
    if (!land.isLandVerified) {
      return;
    }
    return (
      <Card style={{ width: "18rem" }} className="mb-3">
        <Card.Body>
          <Card.Text style={{ fontFamily: "monospace" }}> Land ID</Card.Text>
          <Card.Title>{land.landID}</Card.Title>
          <Card.Text style={{ fontFamily: "monospace" }}> Land Price</Card.Text>
          <Card.Subtitle className="mb-2 text-muted">
            {land.price}
          </Card.Subtitle>
          <Card.Text style={{ fontFamily: "monospace" }}>
            {" "}
            Land wallet Address
          </Card.Text>
          <Card.Subtitle className="mb-2 text-muted">
            {land.landAddress}
          </Card.Subtitle>
          <Card.Text style={{ fontFamily: "monospace" }}>
            {" "}
            Land OwnerAddress
          </Card.Text>
          <Card.Subtitle className="mb-2 text-muted">
            {land.landOwner}
          </Card.Subtitle>
          <Card.Text style={{fontFamily:"monospace"}}>This Land is For sale</Card.Text>
          <Button style={{fontFamily:"monospace"}} variant="primary" onClick={() => handleCheck(land)}>
            Buy
          </Button>
        </Card.Body>
      </Card>
    );
  });
}



