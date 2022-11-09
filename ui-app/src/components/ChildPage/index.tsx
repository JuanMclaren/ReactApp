import { Button, Divider } from '@mui/material';
import React ,{useContext} from 'react'
import myContext from '../../context/MyContext.tsx'
import axios from 'axios';
import GrandChild from '../GrandChild/index.tsx';

const ChildPage = () => {

  const dataSet = useContext(myContext)  
  const {welcomeText , setData , data ,showData ,setShowData} =dataSet;

  const fetchData = () =>{
    setShowData(!showData)
    if(!data){
      console.log('call to backend')
      axios.get('http://localhost:9095/api/csv/get').
      then(res => {
        setData(res.data)
      });

    }

  }

  return (
    <div>{welcomeText} <Divider />
    
    <Button onClick={fetchData}> {showData ? 'Show Data' :'Hide Data'}</Button>

    {showData  && <GrandChild />}
    </div>
  )
}

export default ChildPage