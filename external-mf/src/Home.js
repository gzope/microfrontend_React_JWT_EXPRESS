import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";


function Home() {
    const location=useLocation();
    const [data,setData]=useState([]);
    const [users,setUsers]=useState([]);
    console.log('location',location);
    useEffect(()=>{
      console.log('in use effetc data',data);
      console.log('in use effetc users',users);
      if  ( users.length===0 || users.length===1)
      {
        console.log('inside users');
        fetch('http://localhost:2000/getUsers')
          .then((response)=>{
                  return response.json();
          })
          .then((json)=>{    
            console.log(json);   
              if (json.success===true)
                {
                  console.log(json);
                  setUsers(json.data);                        
                }
              else
                {
                  console.log('else');
                  let apidiv=document.getElementById('mydiv');
                  apidiv.innerHTML=json.message;              
                }
          })
          .catch((error)=>{
            console.log('vatch');
              let apidiv=document.getElementById('mydiv');
              apidiv.innerHTML=error;               
          });
      } 


      if (location.state && ( data.length===0 || data.length===1))
      {
          fetch('http://localhost:2000/verify',{
            method: "POST",      
            body: JSON.stringify(),
            headers: {
              "token":location.state.token
              }
          })
          .then((response)=>{
                  return response.json();
          })
          .then((json)=>{           
              if (json.success===true)
                {
                  setData(json.data.data);                        
                }
              else
                {
                  let apidiv=document.getElementById('apidiv');
                  apidiv.innerHTML=json.message;              
                }
          })
          .catch((error)=>{
              let apidiv=document.getElementById('apidiv');
              apidiv.innerHTML=error;               
          });
      }
   });
    
    return (
        <div className="Home">

          <h3>This is stand alone MF</h3>
          <div id="mydiv">
          {  users.map((element)=>{return <li key={element}>{element}</li>}) }
          </div>
          <hr/>
          
          <div id="apidiv">
            <h3>below is the list if used logged in</h3>
          { data.map((element)=>{return <li key={element}>{element}</li>}) }
          </div>
        </div>
      );
}

export default Home;