import React from "react";
import Link from 'next/link'



function App({ children }) {
  return (
    
      <div className="container">
        <h1>MultiStep Persist Form</h1>
        <Link href="/"><a>Step 1 Form</a></Link>
        <Link href="/MultiForms/step2"><a>Step 2 Form</a></Link>
        <Link href="/MultiForms/result"><a>Result</a></Link>
      
        {children}
        
    </div>
    
  );
}

export default App
