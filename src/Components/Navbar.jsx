import React from 'react'
import { Link, useLocation } from 'react-router-dom';
function Navbar() {
  let location = useLocation();
  console.log(location.pathname);
  return (
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid">
        <Link to={'/'} class="navbar-brand" ><h1 style={{color:'orange'}}>ZeeTee</h1></Link>
        <button class="navbar-toggler bg-warning" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0 nav-content">
            <li class="nav-item">
              <Link to={'/'} className={`nav-link text-black ${location.pathname==='/'?'active-nav-border':''}`} aria-current="page" href="#">Home</Link>
            </li>
            <li class="nav-item">
              <Link to={'/aboutus'} className={`nav-link text-black ${location.pathname==='/aboutus'?'active-nav-border':''}`} href="#">About us</Link>
            </li>
            <li class="nav-item dropdown">
              <Link class="nav-link dropdown-toggle text-black" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Courses
              </Link>
              <ul class="dropdown-menu">
                <li><Link to={'/courses'} class="dropdown-item" href="#">All Courses</Link></li>
                <li><Link to={'/courses/javafullstack'} class="dropdown-item" href="#">Java Full-Stack</Link></li>
                <li><Link to={'/courses/mernstack'} class="dropdown-item" href="#">MERN-Stack</Link></li>
                <li><Link to={'/courses/data-analysis'} class="dropdown-item" href="#">Data Analysis</Link></li>
                <li><Link to={'/courses/meanstack'} class="dropdown-item" href="#">MEAN-Stack</Link></li>
                <li><Link to={'/courses/machinelearning'} class="dropdown-item" href="#">Machine Learning</Link></li>
                <li><Link to={'/courses/pythonstack'} class="dropdown-item" href="#">Python Full-Stack</Link></li>
                <li><hr class="dropdown-divider" /></li>
                <li><Link class="dropdown-item text-white" href="#">Something else here</Link></li>
              </ul>
            </li>
            <li class="nav-item">
              <Link to={'/ourteam'} class="nav-link text-black">Our Team</Link>
            </li>
          </ul>
          <button class="btn btn-warning regis-N-Login" type="register">Your Courses</button>
          <button class="btn btn-warning regis-N-Login" type="submit">You</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar