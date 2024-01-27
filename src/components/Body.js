import React, { useEffect } from 'react'
import Login from './Login'
import Browse from './Browse'
import { createBrowserRouter, RouterProvider, useNavigate } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../utility/firebase'
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from '../utility/userSlice'

const Body = () => {
    const dispatch = useDispatch();
  

    const appRouters = createBrowserRouter([
        {
            path: '/',
            element: <Login />
        },
        {
            path: '/browse',
            element: <Browse />
        }
    ])

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
              const {uid, email, displayName, photoURL} = user;
              console.log(user , "User is signed in");
              dispatch(addUser({uid, email, displayName, photoURL}))
            } else {
              console.log("User is signed out");
              dispatch(removeUser())
            }
          });
    },[])

  return (
    <div>
        <RouterProvider router={appRouters}/>
    </div>
  )
}

export default Body