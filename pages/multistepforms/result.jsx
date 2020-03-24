import { useContext } from 'react'
import Mainformlayoutpage from './mainformlayoutpage'

// import {useStateMachine} from 'little-state-machine'
// import UpdateActionForm from './updateAciton'

import Mycontext from '../../components/context/mycontext/context'

export default ()=>{

    const mystorecontext = useContext(Mycontext)

    // const {state} = useStateMachine(UpdateActionForm)
    return(
        <Mainformlayoutpage>
            <h1>
                Result
            </h1>
    <pre>{JSON.stringify(mystorecontext , null , 2)}</pre>
        </Mainformlayoutpage>
    )
}