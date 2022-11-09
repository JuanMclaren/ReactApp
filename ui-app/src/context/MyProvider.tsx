import React, { useReducer } from 'react'
import MyContext from './MyContext.tsx'
import MyReducer from './MyReducer.tsx'
import { SET_DATA ,SHOW_DATA} from './type/DataType.tsx'

const MyProvider = (props) => {
    const initialState = {
        welcomeText: "Hello World",
        data:null,
        showData: true
    }

 const [state, dispatch] = useReducer(MyReducer, initialState)

 const setData = (payload) => {
    console.log(payload);
    dispatch({
      type: SET_DATA,
      payload: payload
    })
  }

  const setShowData = (payload) => {
    console.log(payload);
    dispatch({
      type: SHOW_DATA,
      payload: payload
    })
  }


 return (
    <MyContext.Provider
      value={{
        welcomeText: state.welcomeText,
        setData,
        data: state.data,
        showData: state.showData,
        setShowData
      }}
    >
      {props.children}
    </MyContext.Provider>
  )
}

export default MyProvider
