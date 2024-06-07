import React from 'react'
import { useLocation, useParams } from 'react-router-dom'
import CourseCard from './CourseCard';

let allCourses = [
    {
      language:'Java',
      courseName:'Spring Boot',
      courseDescription:'Lean everything about Spring',
      courseImage:'https://picsum.photos/300/200',
      courseLink:'/courses/java',  
    },
    {
        language:'Java',
        courseName:'Spring Boot',
        courseDescription:'Lean everything about Spring',
        courseImage:'https://picsum.photos/300/200',
        courseLink:'/courses/java',  
    },
    {
        language:'Java',
        courseName:'Spring Boot',
        courseDescription:'Lean everything about Spring',
        courseImage:'https://picsum.photos/300/200',
        courseLink:'/courses/java',   
    },
    {
        language:'Python',
        courseName:'Machine Learning',
        courseDescription:'Learn everything about AI',
        courseImage:'https://picsum.photos/300/200',
        courseLink:'/courses/python',  
    },
    {
        language:'Python',
        courseName:'Machine Learning',
        courseDescription:'Learn everything about AI',
        courseImage:'https://picsum.photos/300/200',
        courseLink:'/courses/python',  
    },
    {
        language:'Python',
        courseName:'Machine Learning',
        courseDescription:'Learn everything about AI',
        courseImage:'https://picsum.photos/300/200',
        courseLink:'/courses/python',  
    },
    {
        language:'Web Development',
        courseName:'MERN Stack',
        courseDescription:'MongoDB, ExpressJs, ReactJs, NodeJs',
        courseImage:'https://picsum.photos/300/200',
        courseLink:'/courses/web-development',  
    },
    {
        language:'Web Development',
        courseName:'MERN Stack',
        courseDescription:'MongoDB, ExpressJs, ReactJs, NodeJs',
        courseImage:'https://picsum.photos/300/200',
        courseLink:'/courses/web-development', 
    },
]




function Courses() {

    let {course} = useParams();
    let location = useLocation();
    console.log(course);
    console.log(location.pathname);
    let courseType = '';
    if(location.pathname === '/courses')
        courseType = 'All Courses';
    else if(location.pathname==='/courses/java')
        courseType = 'Java Courses';

  return (
    <div className='Courses'>
        <div className="cardArea">
            <h1 className='gradient-colors' style={{textAlign:'center',color:'white'}}>{courseType}</h1>
            <div style={{display:'flex', width:'100%',flexWrap:'wrap',padding:'10px'}}>
            {location.pathname==='/courses'?allCourses.map((course)=>{return(<CourseCard lang={course.language} img={course.courseImage} desc={course.courseDescription} name={course.courseName} link={course.courseLink} />)}):''}
            </div>
        </div>
    </div>
  )
}

export default Courses