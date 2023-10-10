//import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login(props) {

   // const navigator =useNavigate();

    function gotoMenu(e)
    {
  
      fetch('http://localhost:2000/login',{
        method: "POST",      
        body: JSON.stringify({
            email: document.getElementById("exampleInputEmail1").value,
            password: document.getElementById("exampleInputPassword1").value
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
          }
       }).then((response)=>{
        return response.json();
       }).then((json)=>{
        if (json.success===true)
        {
          props.setIslogin(true);
          props.setJWT(json.data.token);
        }
        else
        {
          props.setIslogin(false);
        }
       }
       );       
    }


    return( 
<div className="login">
      <form>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Email address</label>
        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">Password</label>
        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
      </div>
      <div className="form-group form-check">
        <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
      </div>
      <button type="button" className="btn btn-primary" onClick={gotoMenu}>Submit</button>
    </form>
    </div>
    );
}

export default Login;