import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion';
function OurTeam() {

  let ourTeamText = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem dolores libero officia, fugiat consectetur repellendus. Facere consectetur ducimus laudantium aliquam placeat provident voluptate, veniam corrupti aperiam quos alias omnis delectus, tempore laboriosam excepturi asperiores necessitatibus, reiciendis sunt repudiandae adipisci'.split(" ");
  let [makeVisible,setMakeVisible] = useState();
  useEffect(()=>{
    setTimeout(()=>{setMakeVisible(!makeVisible)},300);
  },[]);

  return (
    <div className='boxShadow OurTeamBox'>
      <h1 style={{color:'white',textAlign:'center'}} className='gradient-colors'>Our Team</h1>
      <div className='OurTeamBoxContent'>
        <div className='OurTeamBoxImage'>
        <img className={`${makeVisible?'left-to-right-show':'left-to-right-hidden'}`} src={require('E:/Web Developement/development_website/src/Images/ZeeteeOurTeam.png')} alt="" />
        </div>
        <div className={`OurTeamBoxText boxShadow ${makeVisible?'down-to-up-show':'down-to-up-hidden'}`}>
        <h3 style={{textAlign:'center'}}>Our Leader</h3>
        {ourTeamText.map((text,i)=>{
          return(
            <motion.span
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{duration:0.25,delay:i/10}}
            >
              {text}{' '}
            </motion.span>
          )
        })}
        <div className="contactUsDiv">
          <h1 style={{color:'white'}} className='gradient-colors'>Contact Us</h1>
          <form action="">
            <div className='contactUsDivPart'>
              <label htmlFor="">Name:</label>
              <input placeholder='Enter Your Name' type="text" />
            </div>
            <div className='contactUsDivPart'>
              <label htmlFor="">Phone no:</label>
              <input placeholder='Enter Your Number' type="number" />
            </div>
            <div className='contactUsDivPart'>
              <label htmlFor="">Email:</label>
              <input placeholder='Enter Your Email' type="text" />
            </div>
            <div className='contactUsDivPart'>
              <textarea placeholder='Discuss With Us' name="" id=""></textarea>
            </div>
            <div>
              <button className='btn btn-primary'>submit</button>
            </div>
          </form>
        </div>
        </div>
      </div>
    </div>
  )
}

export default OurTeam