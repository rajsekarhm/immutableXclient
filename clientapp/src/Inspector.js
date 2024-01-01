import { Card } from "@mui/material";
import Button from "react-bootstrap/Button";
function Inspector() {
  const listOfLands = JSON.parse(localStorage.getItem("listOfLands")) || [];
  const toVerify = listOfLands.filter((land) => {
    if (!land.isLandVerified) {
      return true;
    }
    return false;
  });
  const handleVerify = (land) => {
    const index = listOfLands.findIndex(
      (object) => land.landID === object.landID
    );
    listOfLands[index].isforSell = true;
    listOfLands[index].isLandVerified = true;
    localStorage.setItem("listOfLands", JSON.stringify(listOfLands));
    window.location.reload();
  };
  return (
    <>
      {toVerify.map((land) => {
        return (
          <>
            <Card>
            <h3 style={{backgroundColor: 'whitesmoke',padding:5, fontFamily:'monospace' ,textAlign: "center" }}>{land.landAddress}</h3>
            <h3 style={{backgroundColor: 'whitesmoke',padding:5, fontFamily:'monospace' ,textAlign: "center" }}>{land.landID}</h3>
            <h3 style={{backgroundColor: 'whitesmoke',padding:5, fontFamily:'monospace' ,textAlign: "center" }}>{land.landOwner}</h3>
            <h3 style={{backgroundColor: 'whitesmoke',padding:5, fontFamily:'monospace' ,textAlign: "center" }}>{land.price}</h3>
              <Button  onClick={() => handleVerify(land)}>Approve</Button>
            </Card>
          </>
        );
      })}
    </>
  );
}

export default Inspector;

