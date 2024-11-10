import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Form from "../../components/Form";
import { browserStorage } from "../../../../helpers/Storage";
import ProfileCard from "../../components/ProfileCard";
import Button from "../../components/Button";
import connectThroughWindow from "../../../../../blockchain_client/ethereum/connectWallet";
import { SizesList } from "../../components/ListWidgets";
import AssetEntity from "../../../domains/entities/AssetEntity";

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

  const form_field_schema : any = {inputsFileds:[

    {
      defaultValue: undefined,
      description: "enter wallet address",
      className: "w`allet_class",
      type: "text",
      name: "walletAddress",
      maxlength: 100,
    },
    {
      defaultValue: undefined,
      description: "enter price",
      className: "price_class",
      type: "string",
      name: "price",
      maxlength: 10,
    },
    {
      defaultValue: undefined,
      description: "enter stakeholder",
      className: "stakeholder_class",
      type: "text",
      name: "stakeholder",
      maxlength: 10,
    },
    {
      defaultValue: undefined,
      description: "",
      className: "document_class",
      type: "file",
      name: "documentUrl",
      maxlength: 10,
    },
  ],
  isSelectFieldsNeed:true,
  selectFields : [{
    defaultOption:option,
    description:"opt_for",
    fields: [{
      option:"opt for sale",
      value:"opt_for_sale"
    },{
      option:"opt for digitalize",
      value:"opt_for_digitalize"
    }],
    handleChange: (event:any) => { 
      setOption({...option,...{[event.target.name]:event.target.value,["isForSale"]:event.target.value}})
    }
  }]}

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
      
      <Button
        description={"connect wallet"}
        buttonSize="small"
        onclickEvent={connectThroughWindow}
      />
           {/* ProfileCard positioned at the top right */}
           <div style={{ width: '300px', position: 'absolute', top: 0, right: 0 }}>
          <ProfileCard
            card_details={{
              firstName: {
                variant: "h5",
                details: userProfile?.firstname,
                component: "div",
              },
              email: {
                variant: "h7",
                details: userProfile?.email,
                component: "div",
                style: { color: "text.secondary" },
              },
              phoneNumber: {
                variant: "p",
                details: userProfile?.phoneNumber,
                component: "div",
                style: { color: "text.secondary" },
              },
              governmentId: {
                variant: "h7",
                details: userProfile?.governmentId,
                component: "div",
                style: { color: "text.secondary" },
              },
            }}
            buttonText={"verify"}
            onButtonClick={() => {}}
          />
        </div>
      
      <div style={{ position: 'relative', width: '100%', maxWidth: '900px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginTop: '20px' }}>

        {/* Form in the center */}
        <section style={{
          width: '400px',
          padding: '20px',
          background: 'white',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
          borderRadius: '8px',
          textAlign: 'center',
          marginTop: '50px',
        }}>
          <h2>Virtualize Asset</h2>
          <Form
            schema={form_field_schema}
            handleChange={handleChange}
            handleClick={handleClick}
            onSubmit={handleSubmit}
          />
        </section>
      </div>

      {/* SizesList positioned below the Form */}
      <div style={{
        width: '600px',
        padding: '20px',
        background: 'orange',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        borderRadius: '8px',
        textAlign: 'center',
        marginTop: '10px'
      }}>
        <SizesList
          size="ok"
          listTitle="asset under review"
          listObject={{
            properties:{
              walletAddress: "0x212f916DCfF88AC66883a2175de5BDa52C6bA968",
              status: "pending",
              price: "1000",
              stakeholder: "rajubhai da",
            },
            isActionNeed:false,
            action:{
              description:"ok",
              onclick: () => {}
            }
          }}
        />
      </div>
    </div>
  );
};

export default UserProfiles;


