import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useSelector } from 'react-redux'


export default function BasicCard() {
  let list = useSelector((state)=>state.quotesReducer.list)
  
  return (
    <Card sx={{ minWidth: 275 }} >
      <CardContent>
        <Typography variant="h5" component="div">
        {list.person}
        </Typography>
        <br/>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
        {list.quote}
          
        </Typography>
        
      </CardContent >
      <CardActions style={{display:"flex",justifyContent:"center"}}>
      </CardActions>
    </Card>
  );
}
