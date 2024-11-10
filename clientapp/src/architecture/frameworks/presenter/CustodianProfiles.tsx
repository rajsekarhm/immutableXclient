import { useEffect, useState } from "react";
import { SizesList } from "../components/ListWidgets";
import ProfileCard from "../components/ProfileCard";
import { useNavigate } from "react-router-dom";

function CustodianProfiles() {
  const navigate = useNavigate()
  const handleAction = (event:any) => {
    setPendingAsset([{
      properties:{
      walletAddress: "0x212f916DCfF88AC66883a2175de5BDa52C6bA968",
      status: "pending",
      price: "1000",
      stakeholder: "rajubhai da",
      exploree:"sol chain",
     },
     action: {
      isActionNeed:true,
      description:"approved",
      onclick: handleAction
    },}])
  }
  const  [pendingAssets, setPendingAsset] = useState([{
    properties:{
    walletAddress: "0x212f916DCfF88AC66883a2175de5BDa52C6bA968",
    status: "pending",
    price: "1000",
    stakeholder: "rajubhai da",
    exploree:"sol chain",
   },
    action: {
      description:"approved",
      onclick: handleAction,
      isActionNeed:true
    }
  },
  {
    properties:{
    walletAddress: "0x212f916DCfF88AC66883a2175de5BDa52C6bA968",
    status: "pending",
    price: "1000",
    stakeholder: "rajubhai da",
    exploree:"sol chain",
   },
   action: {
      description:"approved",
      onclick:handleAction,
      isActionNeed:true
    }
  }])
  useEffect(() => {
    // api call make to validate that user is authenticated
    if (true) {
      return;
    }
    navigate("/sign-in/custodian");
  }, []);

  return (
    <>
  <div style={{ background: 'white', height: '250vh', display: 'flex', flexDirection: 'column', alignItems: 'left', padding: '40px' }}>
  <div style={{ width: '300px', position: 'absolute', top: 0, right: 0 }}>
          <ProfileCard
            card_details={{
              firstName: {
                variant: "h5",
                details: "userProfile?.firstname",
                component: "div",
              },
              email: {
                variant: "h7",
                details: "userProfile?.email",
                component: "div",
                style: { color: "text.secondary" },
              },
              phoneNumber: {
                variant: "p",
                details: "userProfile?.phoneNumber",
                component: "div",
                style: { color: "text.secondary" },
              },
              governmentId: {
                variant: "h7",
                details: "userProfile?.governmentId",
                component: "div",
                style: { color: "text.secondary" },
              },
              securityId: {
                variant: "h7",
                details: "userProfile?.securityId",
                component: "div",
                style: { color: "text.secondary" },
              }
            }}
            buttonText={"verify"}
            onButtonClick={() => {}}
          />
        </div>
        <div
          style={{
            width: "600px",
            padding: "20px",
            background: "white",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            borderRadius: "10px",
            textAlign: "center",
            marginTop: "20px",
          }}
        >
          {pendingAssets.map((element) => {
              return(<><SizesList
              size="ok"
              listTitle="asset under review"
              listObject={element}
            />
            {/* <Button description="approved" onclickEvent={()=>{}} buttonSize="medium"/> */}
          <br/>
          </>)
            })}
        </div>
      </div>
    </>
  );
}

export default CustodianProfiles;
