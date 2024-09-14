import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import store from "./global-store/store";
import { ErrorBoundary } from "react-error-boundary";
import { fallBackComponent } from "./FallBack";
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";

ReactDOM.render(
  <ErrorBoundary fallback={fallBackComponent()}>
    <Provider store={store}>
      <StrictMode>
      <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://via.placeholder.com/150"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="h6" component="div"sx={{ color: 'text.secondary'  }}>
                Ethereum BlockChain
        </Typography>
        <Typography variant="h7" sx={{ color: 'text.secondary' }}>
               JustinSun
        </Typography>
        <Typography variant="p" component="div" sx={{ color: 'text.secondary' }}>
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
        {/* <App />  */}
      </StrictMode>
    </Provider>
  </ErrorBoundary>,
  document.getElementById("root"),
);


/**
 * defaultValue={defaultValue}
          type={type}
          className={className}
          name={name}
          onClick={handleClick}
          onChange={handleInput}
          pattern={pattern}
          maxLength={maxlength}
 */