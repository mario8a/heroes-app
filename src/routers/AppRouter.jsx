import React, { useContext } from 'react'
import {
   BrowserRouter as Router,
   Switch
 } from 'react-router-dom';

import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

import { LoginScreen } from '../components/login/LoginScreen';
import { DashboardRoutes } from './DashboardRoutes';
import { AuthContext } from '../auth/AuthContext';
  
//Sistema de rutas principal - Tiene como caracteriztica el <Router/>
export const AppRouter = () => {
  //Mandar la vandera si esta auth es true o false del context
  const {user} = useContext(AuthContext);

   return (
      <Router>
      <div>
         {/* En el componente login no se debe mostrar la navbar */}
         {/* <Navbar/> */}
        <Switch>
          <PublicRoute 
            exact 
            path="/login" 
            component={LoginScreen} 
            isAuth={user.logged}
          />
          {/* Esta es la ruta que hay que protejer */}
          {/* Si no esta auth el path cae el ...rest */}
          <PrivateRoute 
            path="/" 
            component={DashboardRoutes}
            isAuth={user.logged}
          />
        </Switch>
      </div>
    </Router>
   )
}
 