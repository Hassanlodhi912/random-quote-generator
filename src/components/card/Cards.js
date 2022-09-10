import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { data } from '../../Data/Data';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function BasicCard() {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
    
        <Typography variant="h5" component="div">
        {data[0].person}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {data[0].quote}
        </Typography>
        
      </CardContent>
      <CardActions>
        <Button size="small">Click for More</Button>
      </CardActions>
    </Card>
  );
}
