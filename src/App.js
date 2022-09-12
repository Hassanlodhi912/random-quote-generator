import Card from './components/card/Cards'
import "./App.css";
import axios from "axios"
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setQuotes } from './store/action/Index';


const App = () => { 
  const dispatch =useDispatch()
  const quotes = useSelector((state) => state.quoteReducer);
  const fetchQuotes = async ()=>{
    const response = await axios.get("https://motivational-quote-api.herokuapp.com/quotes").catch((err)=>{console.log("Error",err)})
    dispatch(setQuotes(response.data))
  };
  useEffect(()=>{
    fetchQuotes()}
    ,[])
    console.log("Quotes:",quotes)
  
  return (
    <div className="image"><div/>

    <div className="card">
    
    <Card/>
    </div>
    </div> 
  )
}

export default App
