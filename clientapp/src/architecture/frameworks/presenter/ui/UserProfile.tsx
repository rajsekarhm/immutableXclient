import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Form from "../../components/Form";
import { browserStorage } from "../../../../helpers/Storage";
import ProfileCard from "../../components/ProfileCard";
import AssetEntity from "../../../domains/entities/AssetEntity";
import ShowCaseCard from "../../components/ShowCaseCard";
import { Label } from "../../components/shadcn/Label";

const UserProfiles = () => {
  const { username } : any = useParams();
  const [option,setOption] = useState({ opt_for: "Opt for Sale", isForSale: "opt_for_sale" })
  const [userProfile, setUserProfile] : any = useState(
    browserStorage.getFromStorage(username.toString())
  );
  const navigate = useNavigate();
  const [newAsset, setnewAsset] = useState(AssetEntity.initialState().assetEntity);
  const {assetHolding}:any = browserStorage.getFromStorage('raja')
  const [assetHoldings,setAssetHoldings] = useState(assetHolding)
  const [reviewStatus, setReviewStatus] = useState(false);
  const mockAsset = [{
    card_details: {id :"one",
      title:"Holdings",
      content: {
        walletAddress: "0x212f916DCfF88AC66883a2175de5BDa52C6bA968",
        status: "pending",
        price: "1000",
        stakeholder: "rajubhai da",
        exploree: "sol chain",
      }},
    buttonText:"View Explorer",
    onClick:()=>{},
    isInputNeed:true
  }]

  const handleChange = (event: any) => {
    event.preventDefault();
    var { name, value, type, files } = event.target;
    if (type === "file" && files) {
      const fileToLoad = files[0];
      const form = new FormData();
      form.append(fileToLoad.name, fileToLoad);
    }
    setnewAsset({ ...newAsset, [name]: value });
  };

  const handleClick = (event: any) => {
    console.log(newAsset);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
   const {isForSale} = option
    if(isForSale == "opt_for_sale") {
      newAsset.isForSale = true
    }
    userProfile.assetHolding.push(newAsset);
    browserStorage.storeInStorage(username.toString(), userProfile);
    setReviewStatus(true);
  };
  
  useEffect(() => {
    // api call make to validate that user is authenticated
    if (true) {
      return;
    }
    navigate("/sign-in/users");
  }, []);

  return (
    <div style={{ background: 'white', height: '150vh', msOverflowY: 'hidden', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
      {reviewStatus && <h2>Asset under review process</h2>}
           {/* ProfileCard positioned at the top right */}
           <div style={{ width: '300px', position: 'absolute', top: 0, right: 0 }}>
          <ProfileCard
            name={"name"}description={"name"}mail={"name"}address={"name"}phone={"name"}
          />
        </div>
       <div>
       <Label> Collections </Label>
       <ShowCaseCard cardDetails={mockAsset}/>
       </div>
    </div>
  );
};

export default UserProfiles;


