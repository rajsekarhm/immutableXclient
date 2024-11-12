import * as React from 'react';
import Slider from '@mui/joy/Slider';
import Box from '@mui/joy/Box';

function valueText(value: number) {
  return `$ ${value}`;
}

export default function MarksSlider({amount,multiples,type}:{amount:number,multiples:number,type:string}) {
  return (
    <Box sx={{ width: 300 }}>
      <Slider
        aria-label="Custom marks"
        defaultValue={20}
        getAriaValueText={valueText}
        step={10}
        valueLabelDisplay="auto"
        marks={[]}
      />
    </Box>
  );
}


function createMarks(amount:string){
    return 
}