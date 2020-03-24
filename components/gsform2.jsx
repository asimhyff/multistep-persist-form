import {useContext} from'react'
import Mycontext from './context/mycontext/context'


export default ()=>{

    const mystorecontext = useContext(Mycontext)

    return(
        <div>
            <p>{mystorecontext.user.firstname}</p>
        </div>
    )
}