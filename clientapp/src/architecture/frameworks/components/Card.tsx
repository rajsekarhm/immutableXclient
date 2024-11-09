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
    <div
      style={{
        width: "700px",
        padding: "10px",
        background: "#0570ad",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        borderRadius: "8px",
        textAlign: "center",
        marginTop: "10px",
      }}
    >
      <CardComponent x={{ maxWidth: 145 }}>
        {/* <CardMedia
          image={image}
          component="img"
          alt="card image"
          height="150"     // Set smaller height
          style={{ objectFit: "contain" }}  // Contain image within given height
        /> */}
        <CardContent>
          {Object.values(card_details).map((element) => {
            return (
                <Typography
                  variant={element.variant}
                  component={element?.component ? element.component : "div"}
                  sx={element.style}
                >
                  {element.details}
                </Typography>
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
