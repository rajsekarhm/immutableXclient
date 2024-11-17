import { useParams } from "react-router-dom";
import ProfileCard from "../../components/ProfileCard";
import TabsSwitch from "../../components/TabSwitch";
import { useEffect, useState } from "react";
function AssetCreation() {
  const { username }: any = useParams();
  const [newDigitalizeAsset,setDigitalizeAsset] = useState({
    tokenId:null,
    value:null,
    tokenURI:null,
    isFungible:null,
    symbol:null,
    walletAddress:null
  })

  function handleChanges (event:any){
    const {name,value} =event.target
    setDigitalizeAsset({...newDigitalizeAsset,[name]:value})
  }

  function handleClick(event:any){
    event.preventDefault();
    console.log(newDigitalizeAsset)
  }

  useEffect(()=>{
    console.log("called")
  })

  const switch1_details = {
    card_details: [
      {
        name: "tokenId",
        value: "tokenId",
        description:""
      },
      {
        name: "value",
        value: "value",
        description:""
      },
      {
        name: "tokenURI",
        value: "tokenURI",
        description:""
      },
      {
        name: "isFungible",
        value: "isFungible",
        description:""
      },
      {
        name:"symbol",
        value:"symbol",
        description:""
      },
      {
        name:"walletAddress",
        value:"walletAddress",
        description:""
      }
    ],
    onChanges: handleChanges,
    onClick:handleClick,
  };
  return (
    <div
      style={{
        background: "white",
        height: "150vh",
        msOverflowY: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <div style={{ width: "300px", position: "absolute", top: 0, right: 0 }}>
        <ProfileCard
          name={"name"}
          description={"name"}
          mail={"name"}
          address={"name"}
          phone={"name"}
        />
      </div>
      <div>
        <TabsSwitch tabsDetails={switch1_details} />
      </div>
    </div>
  );
}

export default AssetCreation;
