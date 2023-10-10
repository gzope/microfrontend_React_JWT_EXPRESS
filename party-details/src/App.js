import { useEffect } from 'react';
import './App.css';

function App(props) {
  
  
  // const [tokenStat,stTokenStat]=useState('');
  useEffect(()=>{
    console.log('inside');
  },[]);
  
  function verifyToken()
  {

            fetch('http://localhost:2000/verify',{
            method: "POST",      
            body: JSON.stringify(),
            headers: {
              "token":props.jwt
              }
          }).then((response)=>{
            return response.json();
          }).then((json)=>{           
            if (json.success===true)
            {
              let apidiv=document.getElementById('apidiv');              
              json.data.data.forEach(element => {
                apidiv.innerHTML=apidiv.innerHTML+'<li>'+element+'</li>';
               });              
              
            }
            else
            {
              let apidiv=document.getElementById('apidiv');
              apidiv.innerHTML=json.message;              
            }
          }
          ).catch((error)=>{
            let apidiv=document.getElementById('apidiv');
              apidiv.innerHTML=error;               
          });    
   
  }

  return (
    <div className="App">
      <h2>This is PARTY MF , mode is {props.modes}</h2>
      <input type="button" value={props.modes}  
      onClick={
        ()=>{props.changeMode(props.modes==='dark'?'light':'dark')}}
        />

       <input type="button" value="test-api" onClick={verifyToken}/> 
       <div id='apidiv'></div>

    </div>
  );
}

export default App;
