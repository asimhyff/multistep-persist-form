
import 'bootstrap/dist/css/bootstrap.min.css'
import GState from '../components/context/mycontext/state'
import Layout from './layout'
// import { StateMachineProvider, createStore , DevTool} from "little-state-machine";
// createStore({
//   mystore:{
//     firstName:"",
//     lastName:"",
//     age:"",
//     dep:""
//   }
// });
// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return <GState><Component {...pageProps} /></GState>
}