import React from "react";
import Link from 'next/link'
import { StateMachineProvider, createStore , DevTool } from "little-state-machine";


// import "./styles.css";

createStore({
  yourDetails:{
    firstName:"",
    lastName:"",
    age:"",
    yearsOfExp:""
  }
});


function App({ children }) {
  return (
    <StateMachineProvider>
      {/* <DevTool /> */}
      <div className="container">
        <h1>MultiStep Persist Form</h1>
        <Link href="/"><a>Step 1 Form</a></Link>
        <Link href="/MultiForms/step2"><a>Step 2 Form</a></Link>
        <Link href="/MultiForms/result"><a>Result</a></Link>
      
        {children}
        
    </div>
    

    </StateMachineProvider>
  );
}

export default App
