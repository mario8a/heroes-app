import React from 'react'
import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

export const PrivateRoute = ({
   isAuth,
   component: Component,
   ...rest 
}) => {

   // console.log(rest.location.pathname);
   //grabar en localstorage la ultima ruta
   localStorage.setItem('lastPath', rest.location.pathname);
   
   //El component sera evaluado mediante una condicion
   return (
      <Route {...rest}
         component={ (props) =>(

            (isAuth)
               ? (<Component {...props} />)
               : (<Redirect to="/login" />)
         )}
      />
   )
}

PrivateRoute.propTypes = {
   isAuth: PropTypes.bool.isRequired,
   component:PropTypes.func.isRequired,
}