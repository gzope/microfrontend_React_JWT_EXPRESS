import './Home.css';
import Page1 from './Page1';
import Page2 from './Page2';
import Basehome from './Basehome';
import {
  Routes,
  Route ,
  useNavigate
} from "react-router-dom";
import { useEffect, useState } from 'react';


function Home(props) {
    const navigate=useNavigate();
    const [mode,setMode]=useState("light");
    console.log('re-rendered in LOGIN HOME.JS');
    console.log('HOME',props)
    // useEffect(()=>{
    //   console.log("mode change");
    // },[mode]);
    function changeMode()
    {
      if (mode==="dark")
      {
        setMode("light");
      }
      else{
        setMode("dark");
      }
      
    }
    function goTo(str)
    {
        navigate(str,{ state: {mode: mode} });
    }    
    return(
        <div className="NavBar"> 
        <nav className={`navbar navbar-expand-lg navbar-${mode} bg-${mode}`}>
        <a className="navbar-brand" href="#">Navbar</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link"  onClick={()=>{goTo('home')}}>Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link"  onClick={()=>{goTo('page1')}}>Page1</a>
            </li>   
            <li className="nav-item">
              <a className="nav-link"  onClick={()=>{goTo('page2')}}>Page2</a>
            </li>   
            <li className="nav-item">
              <input type="button" value={mode}  onClick={changeMode}/>
            </li>               
          </ul>
          
        </div>
      </nav>


      
      <Routes>    
      <Route path="/" element={<Basehome />} />   
       <Route path="/home" element={<Basehome />} />
        <Route path="/page1" element={<Page1 jwt={props.jwt} changeTheme={setMode} currentMode={mode}/>} />
        <Route path="/page2" element={<Page2 jwt={props.jwt}/>} />
      </Routes>
    
      </div>
      
    );

}

export default Home;
