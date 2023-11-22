import React from 'react'
import Footer from '../components/Footer'
import {FiMenu} from 'react-icons/fi'
import {AiFillCloseCircle} from 'react-icons/ai'
import {Link} from 'react-router-dom'


function HomeLayouts({children}) {
    function changeWidth (){
        const drawerSide = document.getElementsByClassName("drawer-side")
        drawerSide[0].style.width = "auto"
    }
    function hideSidebar (){
        const element = document.getElementsByClassName("drawer-toggle")
        element[0].cheacked = false;

        const drawerSide = document.getElementsByClassName("drawer-side")
        drawerSide[0].style.width = "0"
    }
  return (
    <div className='min-h-[90vh]'>
    
        <div className="drawer absolute left-0 z-50 w-full">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <label htmlFor="my-drawer">
                    <FiMenu size={"32px"} className='font-bold text-white m-4' onClick={changeWidth} />
                </label>
            </div>
            <div className="drawer-side w-0">
            <label htmlFor="my-drawer"  className="drawer-overlay"></label>
            <ul className="menu p-4 w-48 sm:w-80 bg-base-200 text-base-content relative">
                <li className='absolute w-fit right-2 z-50'>
                    <button onClick={hideSidebar}>
                        <AiFillCloseCircle/>
                    </button>
                </li>
                <li>
                    <Link to="/"> Home </Link>
                </li>
                <li>
                    <Link to="/contact">Contact us</Link>
                </li>
                <li>
                    <Link to="/about"> About us </Link>
                </li>
                <li>
                    <Link to="/courses"> Courses </Link>
                </li>
      
    </ul>
           
            </div>
  </div>
  {children}
  <Footer/>
</div>
    
    
  )
}

export default HomeLayouts