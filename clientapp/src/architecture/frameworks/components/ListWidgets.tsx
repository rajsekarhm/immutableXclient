import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import Button from "./Button";
import Typography from "@mui/joy/Typography";
import Box from "@mui/joy/Box";

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
  const { properties, action } = listObject;
  const { description, onclick, isActionNeed= false } = action;
  return (
    <div>
      <Box
        sx={{
          flexGrow: 2,
          display: "flex",
          justifyContent: "center",
          gap: 3,
          flexWrap: "wrap",
          "& > *": { minWidth: 300, flexBasis: "auto", maxWidth: 600 },
        }}
      >
        <div key={"lg"}>
          <List
            size={"lg"}
            variant="outlined"
            sx={{ maxWidth: 600, borderRadius: "sm" }}
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
            {Object.keys(properties).map((element: any) => {
              return (
                <>
                  {" "}
                  <ListItem>
                    {" "}
                    <Typography>{element}</Typography>
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
                      {properties[element]}
                    </Typography>{" "}
                  </ListItem>
                </>
              );
            })}
           { isActionNeed ? <Button
              description={description}
              onclickEvent={onclick}
              buttonSize="medium"
            ></Button> : null }
          </List>
        </div>
      </Box>
    </div>
  );
}
