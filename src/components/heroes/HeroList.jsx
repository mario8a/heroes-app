import React, { useMemo } from 'react'
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher'
import { HeroCard } from './HeroCard';

//Trayendo prop publisher de la data ficticia
export const HeroList = ({publisher}) => {
   //Usando useMemo para que no lo vuelva a renderizar
   //el ultimo argumento actua como los efectos, se ejecuta solo si cambia
   const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher])
   // const heroes = getHeroesByPublisher(publisher);

   return (
      <div className="card-columns animate__animated animate__fadeIn">
         {
            heroes.map(hero => (
               <HeroCard key={hero.id}
                  {...hero}
               >
               </HeroCard>
            ))
         }
      </div>
   )
}
 