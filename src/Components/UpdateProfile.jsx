import { useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/Auth";


const UpdateProfile = () => {
     useEffect(()=>{
		document.title='UpdateProfile'
	},[])
     const {updatePP}=useContext(AuthContext)
const handleUpdateP = (e)=>{
     e.preventDefault()
     const name = e.target.username.value
     const photo = e.target.photo.value 
     updatePP(name,photo)

}
     return (
          <div>
               <div className="w-full max-w-md mx-auto p-8 space-y-3 rounded-xl dark:bg-green-50 dark:text-gray-800">
                    <h1 className="text-2xl font-bold text-green-700 text-center"> Update your Profile </h1>
                    <form onSubmit={handleUpdateP} noValidate="" action="" className="space-y-6">
                         <div className="space-y-1 text-sm">
                              <label htmlFor="username" className="block  dark:text-gray-600">Username</label>
                              <input type="text" name="username" id="username" placeholder="Username" className="w-full px-4 py-3 rounded-md  border dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                         </div>
                         <div className="space-y-1 text-sm">
                              <label htmlFor="password" className="block dark:text-gray-600"> Photo Url</label>
                              <input type="text" name="photo" id="photo" placeholder=" Photo Url" className="w-full px-4 py-3 rounded-md border dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                            
                         </div>
                         <button className="block w-full p-3 text-center rounded-sm dark:text-gray-50 dark:bg-green-600">Update </button>
                    </form>
                
                
               </div>
          </div>
     );
};

export default UpdateProfile;