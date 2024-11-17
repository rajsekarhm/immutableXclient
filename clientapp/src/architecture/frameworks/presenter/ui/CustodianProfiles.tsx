import { useEffect, useState } from "react";
import { SizesList } from "../../components/ListWidgets";
import ProfileCard from "../../components/ProfileCard";
import { useNavigate } from "react-router-dom";
import ShowCaseCard from "../../components/ShowCaseCard";

function CustodianProfiles() {
  const navigate = useNavigate();
  const handleAction = (event: any) => {
    setPendingAsset([
      {
        card_details: {
          id: "one",
          title: "assetStatus",
          content: {
            walletAddress: "0x212f916DCfF88AC66883a2175de5BDa52C6bA968",
            status: "pending",
            price: "1000",
            stakeholder: "rajubhai da",
            exploree: "sol chain",
          },
        },
        buttonText: "status",
        onClick: () => {},
        isInputNeed: false,
      },
    ]);
  };
  const [pendingAssets, setPendingAsset] = useState([
    {
      card_details: {
        id: "one",
        title: "assetStatus",
        content: {
          walletAddress: "0x212f916DCfF88AC66883a2175de5BDa52C6bA968",
          status: "pending",
          price: "1000",
          stakeholder: "rajubhai da",
          exploree: "sol chain",
        },
      },
      buttonText: "approve",
      onClick: () => {},
      isInputNeed: true,
    },
    {
      card_details: {
        id: "one",
        title: "assetStatus",
        content: {
          walletAddress: "0x212f916DCfF88AC66883a2175de5BDa52C6bA968",
          status: "pending",
          price: "1000",
          stakeholder: "rajubhai da",
          exploree: "sol chain",
        },
      },
      buttonText: "approve",
      onClick: () => {},
      isInputNeed: true,
    },
  ]);
  useEffect(() => {
    // api call make to validate that user is authenticated
    if (true) {
      return;
    }
    navigate("/sign-in/custodian");
  }, []);

  return (
    <>
      <ProfileCard
        name={"name"}
        description={"name"}
        mail={"name"}
        address={"name"}
        phone={"name"}
      />
      <ShowCaseCard cardDetails={pendingAssets} />
    </>
  );
}

export default CustodianProfiles;
