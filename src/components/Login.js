import React from 'react'
import './Login.css';
import { loginUrl } from  '../spotify';

function Login() {
   return (
      <div className="login">
         {/* Spotify Logo */}
         <img src="images/spotify-logo.jpg" alt="Spotify"/>
         
         {/* Login with Spotify button */}
         <a href={loginUrl}>Login with Spotify</a> 
         
      </div>
   )
}

export default Login
