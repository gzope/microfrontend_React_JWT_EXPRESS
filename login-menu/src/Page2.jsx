
import { Buffer } from 'buffer';

function Page2(props) {
    
    
const data=JSON.stringify({token:props.jwt});
console.log(data);
let objJsonB64 = Buffer.from(data).toString("base64");
console.log(objJsonB64);
window.location.href="http://localhost:3000/?data="+objJsonB64;
    return(
        <h1>This is page2</h1>      
    );

}

export default Page2;
