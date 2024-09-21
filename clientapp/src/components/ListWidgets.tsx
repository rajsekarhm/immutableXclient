import * as React from "react";
import Box from "@mui/joy/Box";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import ListItemButton from "@mui/joy/ListItemButton";
import Typography from "@mui/joy/Typography";
import Home from "@mui/icons-material/Home";

export default function ListWidget({
  type,
  size,
}: {
  type: string;
  size: string;
}) {
  switch (type) {
    case "sizeList": {
      return SizesList();
    }
  }
}

export function SizesList() {
  return (
    <div>
    <Box
      sx={{
        flexGrow: 1,
        display: "flex",
        justifyContent: "center",
        gap: 2,
        flexWrap: "wrap",
        "& > *": { minWidth: 100, flexBasis: "auto", maxWidth:500 },
      }}
    >
      <div key={"lg"}>
        <List
          size={"lg"}
          variant="outlined"
          sx={{ maxWidth: 500, borderRadius: "sm" }}
        >
          <ListItem>
            <Typography
              startDecorator={
                <Box
                  component="span"
                  sx={{
                    bgcolor: "red",
                    width: "0.5em",
                    height: "0.5em",
                    borderRadius: "50%",
                  }}
                />
              }
            >
              Asset under review
            </Typography>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <Typography  variant="soft"
        color="danger"
        startDecorator="🚨"
        sx={{ fontSize: 'sm', '--Typography-gap': '0.5rem', p: 1 }}>
                "0x212f916DCfF88AC66883a2175de5BDa52C6bA968"
              </Typography>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>something</ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton onClick={()=>{console.log('something')}}>something</ListItemButton>
          </ListItem>
        </List>
      </div>
    </Box>
    </div>
  );
}
