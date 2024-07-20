import { Box, Button, Fade } from "@mui/material";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

export const UserProfilePages = () => {
  const userProfile = useSelector((state) => state.userActions);
  const navigate = useNavigate();
  const { username } = useParams();
  return (
    <div>
    <Button> overview </Button>
    <Button> Activity </Button>
    <Button> Portfolio </Button>
    <br></br>
     <Box component="section" sx={{ p: 2, border: '1px dashed grey' }}>
      name - {userProfile.name}
     </Box>
     <Box component="section" sx={{ p: 2, border: '1px dashed grey' }}>
     mail - {userProfile.email}
      </Box>
      <Box component="section" sx={{ p: 2, border: '1px dashed grey' }}>
      contact Number - {userProfile.phoneNumber}
      </Box>
    </div>
  );
};
