import { types } from "../types/types";

// const state = {
//    name: 'Mario',
//    logged: true
// }

export const authReducer = (state = {}, action) => {

   switch (action.type) {
      case types.login:
         return {
            ...action.payload,
            //si pasa la auth
            logged: true
         }
      case types.logout:
         return {
            logged: false
         }
   
      default:
         return state;
   }

}