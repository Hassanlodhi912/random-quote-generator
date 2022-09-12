import Card from './components/card/Cards'
import "./App.css";
import axios from "axios"
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setQuotes } from './store/action/Index';
import { Button } from '@mui/material';


const App = () => { 
  const dispatch =useDispatch()
  let list = useSelector((state) => state);
  const fetchQuotes = async ()=>{
    let response = await axios.get("https://motivational-quote-api.herokuapp.com/quotes/random").catch((err)=>{console.log("Error",err)})
    dispatch(setQuotes(response.data))
  };
  useEffect(()=>{
    fetchQuotes()}
    ,[])
   console.log("quotes",list)
  
  return (
    <div className="image"><div/>

    <div className="card">
    
    <Card/>
    <Button  onClick={fetchQuotes} sx={{backgroundColor:"white"}}>NEXT QUOTES</Button>

    
    </div>
    </div> 
  )
}

export default App
