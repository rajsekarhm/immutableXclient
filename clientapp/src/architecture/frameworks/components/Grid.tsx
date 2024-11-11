import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';
import { Typography } from '@mui/material';

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

export default function BasicGrid({card}:any) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} direction={"row"} size={3}>
      <Grid size={4}>
      {Object.values(card).map((value) => { 
          return ( <Item>{value}</Item>)}
      )}
          </Grid>
      </Grid>
    </Box>
  );
}

    {/* <Grid size={3}>
          <Item>size=8</Item>
        </Grid>
        <Grid size={3}>
          <Item>size=4</Item>
        </Grid>
        <Grid size={3}>
          <Item>size=4</Item>
        </Grid>
        <Grid size={3}>
          <Item>size=8</Item>
        </Grid> */}