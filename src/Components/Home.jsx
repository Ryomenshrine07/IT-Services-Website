import React, { useState } from 'react'
import {useTypewriter,Cursor} from 'react-simple-typewriter';
import ProjectCard from './ProjectCard';
import { AnimatePresence,motion } from 'framer-motion';


let projectCardData = [
  {
    head:'Project-1',
    desc:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae, vitae!',
  },
  {
    head:'Project-2',
    desc:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae, vitae!',
  },
  {
    head:'Project-3',
    desc:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae, vitae!',
  },
  {
    head:'Project-4',
    desc:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae, vitae!',
  },
];






function Home() {

  let [makeVisible,setmakeVisible] = useState(false);
  useState(()=>{
    setInterval(()=>{
      setmakeVisible(!makeVisible);
    },300);
  },[]);
  const text = useTypewriter({
    words:['Best Material', 'Best Staff', 'Best Team'],
    loop:{},
  });

  const textContent = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur, accusantium fugit. Fuga minus corrupti beatae impedit quae optio suscipit assumenda! Fugiat aliquam, corporis id recusandae corrupti saepe fugit placeat? Perspiciatis consectetur molestias et. Ut amet beatae voluptates nulla laborum iusto harum molestiae, omnis autem dolores, nihil ratione odio! Deleniti, enim.'.split(" ");

  return (
    (<div id='Home'>
      <div className="Home-Body">
        <div className={`Home-body-Up ${makeVisible?'down-to-up-show':'down-to-up-hidden'}`}>
          <div className="Home-headingBox">
            <div className="Home-homeHeadings">
              <h1>We Welcome you</h1>
              <h2>To ZeeTee</h2>
              <h3>We Will Provide You <span style={{fontWeight:'bold',}}>{text[0]}</span><Cursor/></h3>
            </div>
            <div className="Home-downdescription">
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod, beatae.</p>
            </div>
          </div>
          <AnimatePresence>
          <div className="latest-Updates">
            <h1 className='gradient-colors'>Latest Updates</h1>
            <div className='latest-Updates-desc' style={{fontSize:'1.8rem',color:'black'}}>
              {textContent.map((text,i)=>{
                return(<motion.span
                initial={{opacity:0}}
                animate={{opacity:1}}
                key={i}
                transition={{duration:0.25,delay:i/10}}
                >
                {text}{" "} 
                </motion.span>)
              })}
            </div>
          </div>
          </AnimatePresence>
        </div>


        <div className="Home-Body-Slider">
          <div id="carouselExampleCaptions" class="carousel slide custom-carousel" data-bs-ride="carousel">
            <div class="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active carousal-horizontal-btn" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" className='carousal-horizontal-btn' data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" className='carousal-horizontal-btn' data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img style={{zIndex:'-1'}} src={require('E:/Web Developement/development_website/src/Images/Image1.png')} class="d-block w-100" alt="..." />
                <div class="carousel-caption d-none d-md-block">
                  <h5 className='carousal-text'>First slide label</h5>
                  <p className='carousal-text'>Some representative placeholder content for the first slide.</p>
                </div>
              </div>
              <div class="carousel-item">
                <img src={require('E:/Web Developement/development_website/src/Images/Image2.png')} class="d-block w-100" alt="..." />
                <div class="carousel-caption d-none d-md-block">
                  <h5 className='carousal-text'>Second slide label</h5>
                  <p className='carousal-text'>Some representative placeholder content for the second slide.</p>
                </div>
              </div>
              <div class="carousel-item">
                <img src={require('E:/Web Developement/development_website/src/Images/Image3.png')} class="d-block w-100" alt="..." />
                <div class="carousel-caption d-none d-md-block">
                  <h5 className='carousal-text'>Third slide label</h5>
                  <p className='carousal-text'>Some representative placeholder content for the third slide.</p>
                </div>
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>

        <div className={`HomeCardSection ${makeVisible?'down-to-up-show':'down-to-up-hidden'}`}>
          <h1 className='gradient-colors' style={{color:'white',textAlign:'center'}}>Projects</h1>
          <div style={{display:'flex',flexWrap:'wrap',margin:'3%'}}>
          {projectCardData.map((project)=>{return (<ProjectCard head={project.head} desc={project.desc}/>)})}
          </div>
        </div>
      </div>
    </div>)
  )
}

export default Home