import { transform } from 'framer-motion'
import React from 'react'
import { Link } from 'react-router-dom'

function ProjectCard(props) {

    const observer = new IntersectionObserver((entries)=>{
        entries.forEach((entry)=>{
            if(entry.isIntersecting)
            {
                entry.target.classList.add('project-card-show');
            }
            else
            {
                entry.target.classList.remove('project-card-show');
            }
        });
    });
    let elements = document.querySelectorAll('.project-card-hidden');
    elements.forEach((element)=>{observer.observe(element)});

    return (
        <div className='ProjectCard project-card-hidden'>
            <div style={{width:'300px',display:'flex',flexDirection:'column',flexWrap:'wrap',justifyContent:'center',alignItems:'center'}}>
                <img style={{borderRadius:'10px 10px 0px 0px'}} src={require('E:/Web Developement/development_website/src/Images/CardImage1.png')} class="card-img-top" alt="..." />
                <div style={{display:'flex',flexDirection:'column'}}>
                    <h5 class="card-title text-warning">{props.head}</h5>
                    <p style={{marginLeft:'0px',color:'orange'}}>{props.desc}</p>
                    <Link style={{width:'120px'}} href="#" class="btn btn-warning">Learn more</Link>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard