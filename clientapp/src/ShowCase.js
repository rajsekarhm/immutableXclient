import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
export default function MarketPlace() {
  const navigate = useNavigate();
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
      </>
    </div>
  );
}

function VirtualizedAssetShowCase(props) {
  const param = useParams()
  const navigate =  useNavigate()
  const handleCheck = async (land) =>{
    if(!param.username){
      navigate('/login')
      return
    }
  }
  return props.assets.map((land) => {
    return (
      <Card style={{ width: "18rem" }} className="mb-3">
        <Card.Body>
          {/* <Card.Text style={{ fontFamily: "monospace" }}> Land ID</Card.Text>
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
          </Button> */}
        </Card.Body>
      </Card>
    );
  });
}



