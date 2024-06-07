import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function CourseCard(props) {

    let navigate = useNavigate();
    let [makeVisible,setmakeVisible] = useState(false);
    useEffect(()=>{
        setTimeout(()=>{return(setmakeVisible(!makeVisible))},300);
    },[]);
;
  return (
    <div className={`courseCard ${makeVisible?'courseCard-animation-show':'courseCard-animation-hidden'}`}>
        <img style={{borderRadius:'5px'}} src={props.img} alt='course_image'/>
        <h4 style={{color:'black'}}>{props.name}</h4>
        <h5>{props.desc}</h5>
        <h6 style={{color:'gray'}}>{props.lang}</h6>
        <button style={{justifyContent:'flex-end'}} className='btn btn-warning' onClick={()=>navigate('')}>Enroll</button>
    </div>
  )
}

export default CourseCard