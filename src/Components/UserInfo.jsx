import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../AuthProvider/Auth';

const UserInfo = () => {
     useEffect(()=>{
		document.title='UserInformation'
	},[])
     const { user } = useContext(AuthContext)
     console.log(user)
     return (
          <div>
               <div className=' text-xl  font-semibold mt-10 mb-8 p-5 card bg-green-100 w-1/2 mx-auto text-center'>
                    <h1> Email: {user?.email} </h1>
                    <h1> Name : {user?.displayName } </h1>
                    <img src={user?.photoURL} alt="" />
               </div>
          </div>

     );
};

export default UserInfo;