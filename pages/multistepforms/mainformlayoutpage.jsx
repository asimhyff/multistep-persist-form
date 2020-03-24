import React from "react";
import Link from 'next/link'
import{Button} from '@material-ui/core'

import {useRouter} from 'next/router'

function App({ children }) {
  const router = useRouter()
  return (
    <div>
      <h1>MultiStep Persist Form</h1>
      <div className="container" >
        <div style={{display:'flex' , justifyContent:'space-around' , backgroundColor:'gray'}}>
        <Button style={{flex:'1' , outline:'none'}} className={router.pathname === '/multistepforms/form1' ? "border-bottom-2" : ''}><Link href="/multistepforms/form1"><a style={{color:'white' , textDecoration:'none'}}>Form 1</a></Link></Button>
          <Button style={{ flex: '1', outline: 'none' }}><Link href="/multistepforms/form2"><a style={{color:'white', textDecoration:'none'}}>Form 2</a></Link></Button>
          <Button style={{ flex: '1', outline: 'none' }}><Link href="/multistepforms/result"><a style={{color:'white', textDecoration:'none'}}>Result</a></Link></Button>
        </div>
        {children}
        
    </div>
    </div>
  );
}

export default App
