import './App.css';
import Login from './Login';
import Home from './Home';
import { useEffect, useState } from 'react';
import { BrowserRouter, useLocation } from "react-router-dom";

function App() {
 
  const [isLogin,setIslogin]=useState(false);
  const [jwt,setJWT]=useState('');
  console.log('re-rendered in LOGIN APP.JS');

  // useEffect(()=>{
  //   isLogin
  // },[isLogin]);

  return (
    <BrowserRouter>
    <div className="App">
      {(!isLogin &&<Login setIslogin={setIslogin} setJWT={setJWT}/> )}
      {(isLogin &&<Home jwt={jwt}/> )}        
    </div>
    </BrowserRouter>
  );
}

export default App;
