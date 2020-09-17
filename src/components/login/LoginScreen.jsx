import React from 'react'

export const LoginScreen = ({history}) => {
//history viene  de las propiedades del react-router
   const handleLogin = () => {
      // history.push('/')
      history.replace('/') //historial cambia
   }

   return (
      <div className="container mt-5">
         <h1>Login screen</h1>
         <hr/>

         <button 
            className="btn btn-primary"
            onClick={handleLogin}
         >
               Login
         </button>
      </div>
   )
}
