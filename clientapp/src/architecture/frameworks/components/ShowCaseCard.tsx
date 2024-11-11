import {
  Card ,
  CardActions,
  CardContent,
  Grid2,
  Typography,
} from "@mui/material";
import Button from "./Button";
import { useState } from "react";
import { InputBox } from "./InputBox";

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

function BasicGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid size={8}>
          <Item>size=8</Item>
        </Grid>
        <Grid size={4}>
          <Item>size=4</Item>
        </Grid>
        <Grid size={4}>
          <Item>size=4</Item>
        </Grid>
        <Grid size={8}>
          <Item>size=8</Item>
        </Grid>
      </Grid>
    </Box>
  );
}


const ShowCaseCard = ({
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
  return (
          <div
      key={className}
      style={{
        width: "300px",
        padding: "10px",
        background: "#0570ad",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        borderRadius: "8px",
        textAlign: "left",
        marginTop: "10px",
        display: 'flex', flexWrap: 'wrap'
      }}
    >
      <BasicGrid/>

      {/* <Card sx={{ maxWidth: 345 }}>
        <CardContent>
          {Object.values(card_details).map((value,index) => <Typography> {value}</Typography>)}
        </CardContent>
        {isInputNeed ? (
          <InputBox componentInfo={fieldDetails} handleInput={onChangeAction} />
        ) : null}
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
      </Card> */}
    </div>
  );
};

export default ShowCaseCard;
