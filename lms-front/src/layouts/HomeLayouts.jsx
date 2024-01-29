import React from 'react'
import Footer from '../components/Footer'
import {FiMenu} from 'react-icons/fi'
import {AiFillCloseCircle} from 'react-icons/ai'
import {Link, useNavigate} from 'react-router-dom'
import {useDispatch , useSelector} from 'react-redux'


function HomeLayouts({children}) {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const isLoggedIn = useSelector((state) => state ?.auth ?.isLoggedIn)
    const role = useSelector((state) => state ?.auth ?. role)


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
     function onLogout (e){
        e.preventDefault()


        navigate("/home")

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
            <ul className="menu p-4 w-48 h-[100%] sm:w-80 bg-base-200 text-base-content relative">
                <li className='absolute w-fit right-2 z-50'>
                    <button onClick={hideSidebar}>
                        <AiFillCloseCircle/>
                    </button>
                </li>
                <li>
                    <Link to="/"> Home </Link>
                </li>
                {
                    isLoggedIn && role === "ADMIN" &&(
                       <li>
                        <Link to="/admin/dashboard">Admin Dashboard</Link>
                       </li> 
                    )
                }
                <li>
                    <Link to="/contact">Contact us</Link>
                </li>
                <li>
                    <Link to="/about"> About us </Link>
                </li>
                <li>
                    <Link to="/courses"> Courses </Link>
                </li>
                {!isLoggedIn ? (
                            <li className=" absolute bottom-4 w-[90%]">
                                <div className="w-full flex items-center justify-center">
                                    <button className="btn btn-primary px-4 py-1 font-semibold rounded-md w-1/2 ">
                                        <Link to="/signin">Login</Link>
                                    </button>
                                    <button className="btn btn-secondary px-4 py-1 font-semibold rounded-md w-1/2 ">
                                        <Link to="/signup">Signup</Link>
                                    </button>
                                </div>
                            </li>
                        ) : (
                            <li className=" absolute bottom-4 w-[90%]">
                                <div className="w-full flex items-center justify-center">
                                    <button className=" bg-violet-700 hover:bg-violet-900 transition-all ease-in-out duration-200 px-4 py-1 font-semibold rounded-md w-full">
                                        <Link to="/user/profile">Profile</Link>
                                    </button>
                                    <button className="bg-fuchsia-600 hover:bg-fuchsia-800 transition-all ease-in-out duration-200 px-4 py-1 font-semibold rounded-md w-full">
                                        <Link onClick={onLogout}>Logout</Link>
                                    </button>
                                </div>
                            </li>
                        )

                        }
      
    </ul>
           
            </div>
  </div>
  {children}
  <Footer/>
</div>
    
    
  )
}

export default HomeLayouts