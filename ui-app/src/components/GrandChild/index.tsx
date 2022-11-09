import React ,{useContext} from 'react'
import './index.scss'
import myContext from '../../context/MyContext.tsx'
import CloseIcon from '@mui/icons-material/Close';
import DoneRoundedIcon from '@mui/icons-material/DoneRounded';
const GrandChild = () => {
    const dataSet = useContext(myContext)  
    const { data} =dataSet;
  

    return (
    <div>
        {data && <div className="divTable" style={{width: "2%" ,border: "2px solid #000"}} >
                <div className="divTableBody">
                
               
               {data.map (d => (
                <div key = {d.id} className="divTableRow">
                    <div className="divTableCell">{d.id}</div>
                    <div className="divTableCell">{d.title}</div>
                    <div className="divTableCell">{d.description}</div>
                    <div className="divTableCell">{d.published ? <DoneRoundedIcon />: <CloseIcon/>}</div>
                </div>
                

               ))}
               </div>
                </div> }
    </div>
  )
}

export default GrandChild