import React from 'react'
import RegForm from '../components/regform'
// import Link from "next/link"
import MainStep1 from './MultiForms/step1'
import GSform from '../components/gstateform'
import MultiStepForm from './multistepforms/form1'

// import GState from '../components/context/mycontext/state'

// import { StateMachineProvider, createStore , DevTool} from "little-state-machine";
// createStore({
//   yourDetail:{
//     firstName:"",
//     lastName:"",
//     age:"",
//     yearsOfExp:""
//   }
// });

export default ()=>{
  return(
    <>
      
    <MultiStepForm />
    </>
  )
}