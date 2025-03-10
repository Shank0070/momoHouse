import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import { RiLogoutBoxRLine } from "react-icons/ri";
function UserProfile() {
    const { user,logout, isAuthenticated, isLoading } = useAuth0();

    console.log(user)
  return (
    <div>

    {
        isAuthenticated ? (
            <div className='shadow-2xl shadow-gray-600 gap-3 w-96 m-auto mt-20 flex'>
                <img src={user.picture} alt=''/>
                <div>
                <h1>Name:{user.name}</h1>
                <h1>Email{user.email}</h1>
                <button onClick={()=>{
                    logout();
                }} className='flex text-2xl  shadow-2xl shadow-gray-600 text-white p-2 bg-black'>Log Out<RiLogoutBoxRLine size={40} /></button>

                </div>
                
            </div>
        ):(
            <div>User Not Found</div>
        )}
        </div>
      )
    }

      
    


export default UserProfile
