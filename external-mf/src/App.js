import './App.css';
import {
  Routes,
  Route ,
  useNavigate,
  useLocation
} from "react-router-dom";

import Home from './Home';
import About from './About';
import { useEffect, useState } from 'react';
function App() {
  const search=useLocation().search;
  var base64 =require("base-64");
  var utf8 =require("utf8");
 
  const data= new URLSearchParams(search).get("data");
  console.log(data);
  const navigate=useNavigate();
  const [token,setToken]=useState('');
 
  useEffect(()=>{
    navigate('/home',{state:{token:token}});  
  },[]);

  
  if(data!==undefined && data !== null)
  {
    console.log('inside');
      let bytes=base64.decode(data);
      let reqData=utf8.decode(bytes);
      let reqObj=JSON.parse(reqData);
      console.log(reqObj.token);
      if (!token)
      {
      setToken(reqObj.token);      
      }
  }
  else
  {
    
  }
  return (
    <div className="App">
      <Routes>    
      <Route exact path="/" element={<Home/>} />   
       <Route path="/home" element={<Home/>} />    
       <Route path="/about" element={<About/>} />    
           
      </Routes>
    </div>
  );
}

export default App;
