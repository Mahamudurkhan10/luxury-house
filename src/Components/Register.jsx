import { NavLink } from "react-router-dom";

const Register = () => {
     return (
          <div>
               <div className="w-full max-w-md mx-auto p-8 space-y-3 rounded-xl dark:bg-green-50 dark:text-gray-800">
                    <h1 className="text-2xl font-bold text-center">Register Now</h1>
                    <form noValidate="" action="" className="space-y-6">
                         <div className="space-y-1 text-sm">
                              <label htmlFor="username" className="block dark:text-gray-600">Username</label>
                              <input type="text" name="username" id="username" placeholder="Username" className="w-full px-4 py-3 rounded-md border dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                         </div>
                         <div className="space-y-1 text-sm">
                              <label htmlFor="password" className="block dark:text-gray-600">Password</label>
                              <input type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md border dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                              
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
          </div>
     );
};

export default Register;