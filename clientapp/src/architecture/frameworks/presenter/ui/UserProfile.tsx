import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Form from "../../components/Form";
import { browserStorage } from "../../../../helpers/Storage";
import ProfileCard from "../../components/ProfileCard";
import AssetEntity from "../../../domains/entities/AssetEntity";
import ShowCaseCard from "../../components/ShowCaseCard";
import { Label } from "../../components/shadcn/Label";
import Button from '../../components/Button';

const UserProfiles = () => {
  const { username } : any = useParams();
  const [userProfile, setUserProfile] : any = useState(
    browserStorage.getFromStorage(username.toString())
  );
  const navigate = useNavigate();
  const [newAsset, setnewAsset] = useState(AssetEntity.initialState().assetEntity);
  const {assetHolding}:any = browserStorage.getFromStorage('raja')
  const [assetHoldings,setAssetHoldings] = useState(assetHolding)
  const mockAsset = [{
    card_details: {
      id :"one",
      title:"Holdings",
      content: {
        description:"about asset",
        walletAddress: "0x212f916DCfF88AC66883a2175de5BDa52C6bA968",
        status: "pending",
        value: "$ 1000 ",
        uri: "ipfs link",
        tokenId: "17710",
      }},
    buttonText:"View Explorer",
    onClick:()=>{},
    isInputNeed:true
  }]

  useEffect(() => {
    // api call make to validate that user is authenticated
    if (true) {
      return;
    }
    navigate("/sign-in/users");
  }, []);

  return (
    <div style={{ background: 'white', height: '150vh', msOverflowY: 'hidden', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
          <div style={{ width: '300px', position: 'absolute', top: 0, right: 0 }}>
          <ProfileCard
            name={"name"}description={"name"}mail={"name"}address={"name"}phone={"name"}
          />
        </div>
       <div>
        <Button onclickEvent={() => navigate('/tokenization')} description={"Tokenization"}/>
        <Button onclickEvent={() => navigate('/asset-digitalize')} description={"Asset Digitalize"}/>
       </div>
       <div>
       <Label> Collections </Label>
       <ShowCaseCard cardDetails={mockAsset}/>
       </div>
    </div>
  );
};

export default UserProfiles;


