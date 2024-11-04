import {
  Card as CardComponent,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import Button from "./Button";
import { useState } from "react";
import { InputBox } from "./InputBox";
const Card = ({
  className,
  image,
  card_details,
  buttonText,
  onButtonClick,
  onClickInDetails,
  detailsButtonText,
  isInputNeed,
  onChangeAction,
  fieldDetails,
}: any) => {
  const [input, setInput] = useState<Number>(0);
  return (
    <div className={className}>
      <CardComponent x={{ maxWidth: 245 }}>
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
        {isInputNeed ? (
          <InputBox componentInfo={fieldDetails} handleInput={onChangeAction} />
        ) : null}
        <Typography> highest amount bid 0</Typography>
        <CardActions>
          <Button
            description={buttonText}
            buttonSize="small"
            onclickEvent={onButtonClick}
          />
          <Button
            description={detailsButtonText}
            buttonSize="small"
            onclickEvent={onClickInDetails}
          />
        </CardActions>
      </CardComponent>
    </div>
  );
};

export default Card;
