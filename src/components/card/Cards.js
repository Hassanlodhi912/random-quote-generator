import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useSelector } from 'react-redux'
import Data, { data } from "../../Data/Data"


export default function BasicCard() {
  let list = useSelector((state)=>state.list)
  // const {quote,person} = list ;
  return (
    <Card sx={{ minWidth: 275 }} >
      <CardContent>
        <Typography variant="h5" component="div">
        {data[0].person}
        </Typography>
        <br/>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
        {data[0].quote}
          
        </Typography>
        
      </CardContent >
      <CardActions style={{display:"flex",justifyContent:"center"}}>
        <Button  size="small">NEXT QUOTES</Button>
      </CardActions>
    </Card>
  );
}
