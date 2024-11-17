import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Form from "../../components/Form";
import { browserStorage } from "../../../../helpers/Storage";
import ProfileCard from "../../components/ProfileCard";
import AssetEntity from "../../../domains/entities/AssetEntity";

function TokenCreation() {
  const { username } : any = useParams();
//   const [userProfile, setUserProfile] : any = useState(
//     browserStorage.getFromStorage(username.toString())
//   );
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
    // userProfile.assetHolding.push(newAsset);
    // browserStorage.storeInStorage(username.toString(), userProfile);
    setReviewStatus(true);
  };

  const form_field_schema3 :any= {inputsFileds:[

    {
      defaultValue: undefined,
      description: "Enter token creation address",
      className: "wallet_class",
      type: "text",
      name: "walletAddress",
      maxlength: 100,
    },
    {
      defaultValue: undefined,
      description: "Enter number of token",
      className: "price_class",
      type: "string",
      name: "numberOfTokens",
      maxlength: 10,
    },
    {
      defaultValue: undefined,
      description: "Enter Symbol",
      className: "symbol_class",
      type: "text",
      name: "symbol",
      maxlength: 10,
    },
    {
      defaultValue: undefined,
      description: "Enter Token Name",
      className: "tokenname_class",
      type: "text",
      name: "tokenName",
      maxlength: 10,
    }
  ],
  isSelectFieldsNeed:false}


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
      
      <div style={{ position: 'relative', width: '100%', maxWidth: '900px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginTop: '20px' }}>
        <section style={{
          width: '400px',
          padding: '20px',
          background: 'white',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
          borderRadius: '8px',
          textAlign: 'center',
          marginTop: '50px',
        }}>
          <h2>Tokenization Asset</h2>
          <Form
            schema={form_field_schema3}
            handleChange={handleChange}
            handleClick={handleClick}
            onSubmit={handleSubmit}
          />
          
        </section>
      </div>
    </div>
  );
};

export default TokenCreation;


