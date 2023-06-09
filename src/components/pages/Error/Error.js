import React from 'react'
import { useRouteError } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import style from './error.module.css'

const Error = () => {
    const error =useRouteError();
    const navigate=useNavigate();
    console.log(error)
  return (
    <div>
        <h1>{error.status} : {error.statusText}</h1>
        <h1>Oops !!!</h1>
        <h2>We can't seem to find the page you're looking for.</h2>
        <button onClick={()=>navigate("/")}>Go to home Page</button>
    </div>
  )
}

export default Error