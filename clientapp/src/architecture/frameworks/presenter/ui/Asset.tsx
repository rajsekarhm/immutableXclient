import { useParams } from "react-router-dom";
import ProfileCard from "../../components/ProfileCard";
import TabsSwitch from "../../components/TabSwitch";
import { useEffect, useState } from "react";
import CONTRACT_ADDRESS_TESTNET from "../../../contract/Contract";
import ContractETH from "../../../contract/ContractETH";
import asset_abi from "../../../../../blockchain_client/ethereum/abi/asset_abi";
import { Toaster } from "../../components/shadcn/BottomBanner";
import { toast } from "sonner";
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

  async function handleClick(event:any){
    event.preventDefault();
    // api call  {}
    const _contract =  new ContractETH("browser",window.ethereum)
    const web = await _contract.interactWithContract(CONTRACT_ADDRESS_TESTNET,asset_abi)
    const {tokenId, value,tokenURI,isFungible,symbol, walletAddress} = newDigitalizeAsset
    const result = await web.getHoldingAssetX("0x212f916DCfF88AC66883a2175de5BDa52C6bA968","2020")
    toast(`Asset ${result[4]} Have Been Minted`, {
      description: "check in chain Explorer",
    })
  }

  useEffect(()=>{
  },[])

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
      <Toaster/>
    </div>
  );
}

export default AssetCreation;
