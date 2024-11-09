import {
    Card,
    CardActions,
    CardContent,
    Typography,
  } from "@mui/material";
  import Button from "./Button";
  const ProfileCard = ({
    className,
    card_details,
    buttonText,
    onButtonClick
  }: any) => {
    return (
      <div className={className}>
        <Card x={{ maxWidth: 245 }}>
          <CardContent>
            {Object.values(card_details).map((element:any) => {
              return (
                <div key={element.details}>
                  <Typography
                    variant={element.variant}
                    component={element?.component ? element.component : "div"}
                    sx={element.style}
                  >
                    {element.details}
                  </Typography>
                </div>
              );
            })}
          </CardContent>
          <CardActions>
           { buttonText ? <Button
              description={buttonText}
              buttonSize="small"
              onclickEvent={onButtonClick}
            /> :null}
          </CardActions>
        </Card>
      </div>
    );
  };
  
  export default ProfileCard;
  
