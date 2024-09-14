import { Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { cardType } from "../global-store/types/stateType/CardType";
import ButtonComponent from "./Button";
const CardComponent = ({
  className,
  image,
  title,
  description,
  buttonText,
  onButtonClick,
  stakeholder,
  price,
  onClickInDetails,
  detailsButtonText,
}: cardType) => {
  return (
    <div className={className}>
      <Card x={{ maxWidth: 345 }}>
        <CardMedia image={image} />
        <CardContent>
          <Typography>
             {title}
          </Typography>
          <Typography>
             {stakeholder}
          </Typography>
          <Typography>
             {price}
          </Typography>
          <Typography>
             {description}
          </Typography>
        </CardContent>
        <CardActions>
        <ButtonComponent description={buttonText} buttonSize="small" onclickEvent={onButtonClick}/>
        <ButtonComponent description={detailsButtonText} buttonSize="small" onclickEvent={onClickInDetails}/>
        </CardActions>
      </Card>
    </div>
  );
};

export default CardComponent;
