import React from 'react'
import {
   BrowserRouter as Router,
   Switch,
   Route
 } from 'react-router-dom';

import { LoginScreen } from '../components/login/LoginScreen';
import { DashboardRoutes } from './DashboardRoutes';
  
//Sistema de rutas principal - Tiene como caracteriztica el <Router/>
export const AppRouter = () => {
   return (
      <Router>
      <div>
         {/* En el componente login no se debe mostrar la navbar */}
         {/* <Navbar/> */}
        <Switch>
          <Route exact path="/login" component={LoginScreen} />
          <Route path="/" component={DashboardRoutes} />
        </Switch>
      </div>
    </Router>
   )
}
 