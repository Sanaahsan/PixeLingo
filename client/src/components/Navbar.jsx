import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { Link , useNavigate} from 'react-router-dom'
import { AppContext } from '../context/AppContext'




const Navbar = () => {
   
    const {user, setShowLogin, logout, credit}= useContext(AppContext)



    // for debugging 
    const printCredits = () => {
        console.log("credits: " + credit)
        console.log(user)
        console.log("userCRedits: " + user.creditBalance + " test")
    };
   
    const navigate = useNavigate()//click on pricing to go to buy credits page



    return (
        // to put items on right side and logo on left side:flex
        <div className='pt-0 flex items-center justify-between py-4'>
            {/* <button style={{"cursor": "pointer"}} onClick={printCredits}>test</button> */}
            {/* when we click on the logo it will redirect to the home page */}
            <Link to='/'>
                <img src={assets.logo} className='w-28 sm:w-32 lg:w-40' /></Link>

            {/* right side of navbar is changing in every page */}
            <div>
                {/* loggedout and loggedin */}
                {
                user ?
                    <div className='flex items-center gap-2 sm:gap-3'>
                        <button onClick={()=>navigate('/buy')} className='flex items-center gap-2 bg-blue-100 px-4 sm:px-6 py-1.5 sm:py-3 rounded-full hover:scale-105 transition-all duration-700'>
                            <img className='w-5' src={assets.credit_star}/>
                            {/* <p className='text-xs sm:text-sm font-medium text-gray-600' >Credit left : {user.creditBalance} </p> */}
                            <p className='text-xs sm:text-sm font-medium text-gray-600' >Credit left : {credit} </p>
                        </button>
                        <p className='text-gray-600 max-sm:hidden pl-4'>Hi, {user.name}</p>
                        <div className='relative group'>
                            <img src={assets.profile_icon} className='w-10 drop-shadow'/>
                            <div className='absolute hidden group-hover:block top-0 right-0 z-10 text-black rounded pt-12'>
                                <ul className='list-none m-0 p-2 bg-white rounded-md border-none text-sm'>
                                    <li onClick={logout} className='py-1 px-2 cursor-pointer pr-10'>Logout</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    :
                    <div className='flex items-center gap-2 sm:gap-5'>
                        {/* click on pricing and go to buy credits page */}
                        <p onClick={()=>navigate('/buy')} 
                        className='cursor-pointer'> Pricing </p>
                        <button onClick={()=>setShowLogin(true)} className=' bg-zinc-800 text-white px-7 py-2 sm:px-10 text-sm rounded-full'>Login</button>
                    </div>
                    }


            </div>
        </div>
    )
}

export default Navbar