import React, { useMemo } from 'react'
import queryString  from 'query-string';

import { useLocation } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../heroes/HeroCard';
import { getHeroeByName } from '../../selectors/getHeroesByName';

export const SearchScreen = ({history}) => {

   const location = useLocation();
   // console.log(queryString.parse(location.search));
   const {q = ''} = queryString.parse(location.search);
   //Pasar este query como valor inicial en la busqueda
   
   const [{busqueda}, handleInputChange] = useForm({
      busqueda: q
   });
   
   
   // const heroesFiltered = heroes;
   // const heroesFiltered = getHeroeByName(busqueda);
   //Usando el use memo, solo se dispara el hook cuando el q cambia (query)
   const heroesFiltered = useMemo(() => getHeroeByName(q), [q]);
   

   const handleSearch = (e) => {
      e.preventDefault()
      // console.log(busqueda);
      //Creando un query-String
      history.push(`?q=${busqueda}`);
   }

   return (
      <div>
         <h1>SearchScreen</h1>
         <hr/>

         <div className="row">
            <div className="col-5">
               <h4>Search Form</h4>
               <hr/>

               <form action="" onSubmit={handleSearch}>
                  <input 
                     type="text"
                     placeholder="find your hero"
                     className="form-control"
                     name="busqueda"
                     autoComplete="off"
                     value={busqueda}
                     onChange={handleInputChange}
                  />

                  <button
                     type="submit"
                     className="btn m-1 btn-block btn-outline-primary"
                  >
                     Search...
                  </button>
               </form>
            </div>

            <div className="col-7">
               <h4>Reults</h4>
               <hr/>

               {
                  (q === '') 
                     && 
                     <div className="alert alert-info">
                        Search a hero
                     </div>
               }

               {
                  (q !== '' && heroesFiltered.length === 0) 
                     && 
                     <div className="alert alert-danger">
                        There is no a hero with {q}
                     </div>
               }

               {
                  heroesFiltered.map(hero => (
                     <HeroCard
                        key={hero.id}
                        {...hero}
                     />
                  ))
               }

            </div>
         </div>
      </div>
   )
}
