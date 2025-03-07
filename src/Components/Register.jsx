import { useContext, useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/Auth";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";
AOS.init()

const Register = () => {
      useEffect(()=>{
          document.title='Register'
      },[])
     const { register, updatePP } = useContext(AuthContext)
     const [error, setError] = useState('')
     const [ showPass, setShowPass]=useState(false)
     const location = useLocation()
     const navigate = useNavigate()
     const handleRegister = (e) => {
          e.preventDefault()
          const email = e.target.email.value
          const password = e.target.password.value
          const name = e.target.username.value
          const photo = e.target.photo.value
          console.log(email, password, name, photo)
          if (/^(?=.*[A-Z])(?=.*[a-z]).{6,}$/.test(password)) {
            
               register(email, password)
               .then(() => {
                    updatePP(name, photo)
                    navigate(location?.state ? location.state : '/')

               })
          }
          else{
               setError(toast('give me vaild password'))
               return
          }
         
            setError('') 
     }
     return (
          <div data-aos="flip-down" data-aos-delay="200">
               <div className="w-full mt-10 max-w-md mx-auto p-8 space-y-3 rounded-xl dark:bg-green-50 dark:text-gray-800">
                    <h1 className="text-2xl font-bold text-center">Register Now</h1>
                    <form onSubmit={handleRegister} noValidate="" action="" className="space-y-6">
                         <div className="space-y-1 text-sm">
                              <label htmlFor="username" className="block dark:text-gray-600">Username</label>
                              <input type="text" name="username" id="username" placeholder="Username" className="w-full px-4 py-3 rounded-md border dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                         </div>
                         <div className=" relative space-y-1 text-sm">
                              <label htmlFor="password" className="block dark:text-gray-600">Password</label>
                              <input type={showPass?'text':'password'} name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md border dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                            <span className="absolute top-1/2 right-2" onClick={()=> setShowPass(!showPass)}> {
                              showPass?<FaEyeSlash></FaEyeSlash>:<FaEye></FaEye>
                            } </span>
                         </div>
                         <div className="space-y-1 text-sm">
                              <label htmlFor="email" className="block dark:text-gray-600">Email</label>
                              <input type="email" name="email" id="email" placeholder="Your email please" required className="w-full px-4 py-3 rounded-md border dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />

                         </div>
                         <div className="space-y-1 text-sm">
                              <label htmlFor="password" className="block dark:text-gray-600">Photo Url</label>
                              <input type="text" name="photo" id="photo" placeholder="Photo Url" className="w-full px-4 py-3 rounded-md border dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />

                         </div>

                         <button className="block w-full p-3 text-center rounded-sm dark:text-gray-50 dark:bg-green-600">Register </button>
                    </form>

                    <p className="text-xs text-center sm:px-6 dark:text-gray-600"> Already have an account?
                         <NavLink to={'/login'}>  <a rel="noopener noreferrer" href="#" className="underline text-sm dark:text-green-800 font-semibold">Login Here</a></NavLink>
                    </p>
                  
               </div>
               <ToastContainer></ToastContainer>
          </div>
     );
};

export default Register;