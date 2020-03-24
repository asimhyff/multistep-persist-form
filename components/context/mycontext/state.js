import React, {
    useReducer
} from 'react'

// import axios from 'axios'

import MyContext from './context'
import myReducer from './reducer'

import {
    SET_VALUES
} from '../mycontexttype'

const MyState = props => {
    const initialState = {
        user: {
            email: '',
            password: '',
            age: '',
            dep: '',
            cnicfile:''
        }
    }

    const [state, dispatch] = useReducer(myReducer, initialState)



    //set firstvalues
    const onHandleChange = ([e]) => {
        const value = e.target.value
        const name = e.target.name
        dispatch({
            type:SET_VALUES,
            payload: {value , name}
        })
    }

    return <MyContext.Provider
    value = {
            {
                user:state.user,
                onHandleChange
            }
        } > {
            props.children
        }

        </MyContext.Provider>
}

export default MyState