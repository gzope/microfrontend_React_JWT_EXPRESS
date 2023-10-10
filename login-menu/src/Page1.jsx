
// import React, { lazy, Suspense, useState } from "react";
// import { useLocation } from "react-router-dom";

//  const PartyMF = lazy(() => import("party/PartyModule"));

//import("./bootstrap.js");
import  "party/PartyModule";

// function Page1(props) {    
//     console.log('re-rendered in LOGIN PAGE1.JS');
//     const location = useLocation();    
//     const [page1Mode,setpage1Mode]=useState(props.currentMode);
    
//     if (page1Mode!==props.currentMode)
//     {
//         fun1();
//     }
//     function fun1()
//     {       
//         props.changeTheme(page1Mode==='dark'?'light':'dark');
//         setpage1Mode(page1Mode==='dark'?'light':'dark');   
//     }
//     return(
//         <>
//               <Suspense fallback={<span>Loading...</span>}>

//         <PartyMF jwt={props.jwt} changeMode={props.changeTheme} modes={page1Mode} />
//         </Suspense>
//         <hr/>
//         <h2>This is page1 of LOGIN MF {page1Mode}</h2>
//         <input type="button" value={page1Mode} onClick={fun1} />
//         </>
      
//     );

// }

export default Page1;
