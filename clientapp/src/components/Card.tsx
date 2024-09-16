import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { cardType } from "../global-store/types/state_types/CardType";
import ButtonComponent from "./Button";
const CardComponent = ({
  className,
  image,
  card_details,
  buttonText,
  onButtonClick,
  onClickInDetails,
  detailsButtonText,
}: cardType) => {
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
