import React from 'react'
import { useLocation , Route,Routes} from 'react-router-dom'
import { AnimatePresence } from 'framer-motion';
import Home from './Home';
import Aboutus from './Aboutus';
import Courses from './Courses';
import OurTeam from './OurTeam';
function AnimateRoutes() {
  const location = useLocation();

  return (
    <div>
        <AnimatePresence key={location.pathname}>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/aboutus' element={<Aboutus/>}/>
          <Route path='/courses' element={<Courses/>}/>
          <Route path='/courses/:javafullstack' element={<Courses/>}/>
          <Route path='/courses/:mernstack' element={<Courses/>}/>
          <Route path='/courses/:data-analysis' element={<Courses/>}/>
          <Route path='/courses/:meanstack' element={<Courses/>}/>
          <Route path='/courses/:machinelearning' element={<Courses/>}/>
          <Route path='/courses/:pythonstack' element={<Courses/>}/>
          <Route path='/ourteam' element={<OurTeam/>}/>
        </Routes>
        </AnimatePresence>
    </div>
  )
}

export default AnimateRoutes