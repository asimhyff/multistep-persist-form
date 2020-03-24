import React , {useContext} from 'react'
import MyContext from '../components/context/mycontext/context'



export default()=>{
    const GlobleContext = useContext(MyContext)
    return(
        <div>
            {/* <input type="text" name="firstname" value={GlobleContext.user.firstuser.firstname} onChange={GlobleContext.setfirstname} /> */}
    {/* <p>{GlobleContext}</p> */}
    <p>{GlobleContext.user.firstname}</p>
    {/* <p>{GlobleContext.user.age}</p>
    <p>{GlobleContext.user.address.postalCode}</p>
    <p>{GlobleContext.user.address.permanentAddress}</p> */}
        </div>
    )
}