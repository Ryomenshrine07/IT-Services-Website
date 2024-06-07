import React, { useEffect, useState } from 'react'
import {motion} from 'framer-motion'
import {useLocation} from 'react-router-dom';

function Aboutus() {

    const aboutUsDesc = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum  irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non  .'.split(" ");
    const aboutUsGoal = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum  irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit  irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit .'.split(" ");
    const location = useLocation();
    let [makeVisible, setmakeVisible] = useState(false);
    useEffect(()=>{
        setTimeout(()=>{setmakeVisible(!makeVisible)},300);
    },[]);
  return (
    <div className='main' key={location.pathname}> 
        <div className={`about-us-desc ${makeVisible?'courseCard-animation-show':'courseCard-animation-hidden'}`} style={{textAlign:'center',padding:'10px', height:'500px'}}>
            <h1 className='gradient-colors' style={{color:'white'}}>About Us</h1>
            <div className='about-desc-text'>
                {aboutUsDesc.map((text,i)=>{
                    return(
                        <motion.span
                        initial={{opacity:0}}
                        animate={{opacity:1}}
                        transition={{duration:0.25,delay:i/10}}
                        style={{fontSize:'20px'}}
                        >
                        {text}{" "}
                        </motion.span>
                    );
                })}
            </div>
        </div>
        <div className={`about-us-goal ${makeVisible?'courseCard-animation-show':'courseCard-animation-hidden'}`} style={{textAlign:'center',padding:'10px'}}>
            <h1 className='gradient-colors' style={{color:'white'}} >Our Goal</h1>
                <div>
                    {aboutUsGoal.map((text,i)=>{
                        return(
                            <motion.span
                            initial={{opacity:0}}
                            animate={{opacity:1}}
                            transition={{duration:0.25,delay:i/10}}
                            >
                            {text}{" "}
                            </motion.span>
                        );
                    })}
                </div>
            <img src="https://img.freepik.com/free-vector/business-target-achievement-concept-young-businessman-is-happy-that-business-is-as-successful-as-arrow-that-shoots-accurately-into-center-target-vector-illustration_1150-60919.jpg?t=st=1717741811~exp=1717745411~hmac=2f113c8fd36970f6f4444d60da3401bccaacbfa00959077d1f131352031d36ed&w=1060" alt="" />
        </div>
    </div>
  )
}

export default Aboutus