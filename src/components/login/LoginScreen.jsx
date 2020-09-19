import React, { useContext } from 'react'
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';

export const LoginScreen = ({history}) => {
//history viene  de las propiedades del react-router
   const {dispatch} = useContext(AuthContext);
   const handleLogin = () => {
      // history.push('/')
      // history.replace('/') //historial cambia
      //Recordar la ultima pagina visitada
      const lastPath = localStorage.getItem('lastPath') || '/'
      
      dispatch({
         type: types.login,
         payload: {
            name: 'Mario'
         }
      });
      history.replace(lastPath)
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
