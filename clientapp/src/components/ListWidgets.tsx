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
      return SizesList({ size });
    }
  }
}

export function SizesList({
  size,
  listObject,
  listTitle,
}: {
  size: string;
  listObject?: any;
  listTitle?: string;
}) {
  return (
    <div>
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          justifyContent: "center",
          gap: 2,
          flexWrap: "wrap",
          "& > *": { minWidth: 100, flexBasis: "auto", maxWidth: 500 },
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
                {listTitle}
              </Typography>
            </ListItem>
            {Object.keys(listObject).map((element: any) => {
              return (
                <>
                  {" "}
                  <ListItem> <Typography>{element}</Typography></ListItem>
                  <ListItem>
                    <Typography
                      variant="soft"
                      color="primary"
                      startDecorator="🚨"
                      sx={{
                        fontSize: "sm",
                        "--Typography-gap": "0.5rem",
                        p: 1,
                      }}
                    >
                      {listObject[element]}
                    </Typography>
                  </ListItem>
                </>
              );
            })}
          </List>
        </div>
      </Box>
    </div>
  );
}
