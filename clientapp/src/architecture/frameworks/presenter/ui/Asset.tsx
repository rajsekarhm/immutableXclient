import { useParams } from "react-router-dom";
import ProfileCard from "../../components/ProfileCard";
import TabsSwitch from "../../components/TabSwitch";
function AssetCreation() {
  const { username }: any = useParams();
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
        <TabsSwitch />
      </div>
    </div>
  );
}

export default AssetCreation;
