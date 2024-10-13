import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  TextField,
  Typography,
} from "@mui/material";
import { cardType } from "../global-store/types/state_types/CardType";
import ButtonComponent from "./Button";
import { useState } from "react";
import { DataVault } from "./DataVault";
const CardComponent = ({
  className,
  image,
  card_details,
  buttonText,
  onButtonClick,
  onClickInDetails,
  detailsButtonText,
  isInputNeed,
  onChangeAction,
  fieldDetails
}: cardType) => {
  const [input,setInput] = useState<Number>(0);
  return (
    <div className={className}>
      <Card x={{ maxWidth: 245 }}>
        <CardMedia
          image={image}
          component="img"
          alt="green iguana"
          height="140"
        />
        <CardContent>
          {Object.values(card_details).map((element) => {
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
        {isInputNeed?<DataVault
                    componentInfo={fieldDetails}
                    handleInput={onChangeAction}
                  />:null}
                 <Typography> highest amount bid 0</Typography>
        <CardActions>

          <ButtonComponent
            description={buttonText}
            buttonSize="small"
            onclickEvent={onButtonClick}
          />
          <ButtonComponent
            description={detailsButtonText}
            buttonSize="small"
            onclickEvent={onClickInDetails}
          />
        </CardActions>
      </Card>
    </div>
  );
};

export default CardComponent;
