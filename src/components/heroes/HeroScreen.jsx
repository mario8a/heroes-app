import React, { useMemo } from 'react'
import { Redirect, useParams } from 'react-router-dom'
import { getHeroeById } from '../../selectors/getHeroById';

//history para regresar de pagina
export const HeroScreen = ({history}) => {

   // const params = useParams();
   const {heroeId} = useParams();

   //Si el id no cambia, no realiza ninguna renderizacion
   const hero = useMemo(() => getHeroeById(heroeId), [heroeId])
   // const hero = getHeroeById(heroeId);

   //validando que la ruta sea correcta
   if(!hero) {
      return <Redirect to="/" />
   }

   const {
      superhero,
      publisher,
      alter_ego,
      first_appearance,
      characters,
   } = hero;
   // console.log(hero);

   const handleReturn = () => {

      if(history.length <=2) {
         history.push('/')
      } else {         
         history.goBack()
      }

   }

   return (
      <div className="row mt-5">
         <div className="col-4">
            <img 
               src={`../assets/heroes/${heroeId}.jpg`}
               alt={superhero}
               className="img-thumbnail animate__animated animate__fadeInLeft"/>
         </div>
         <div className="col-8">
            <h3>{superhero}</h3>
            <ul className="list-group list-group-flush">
               <li className="list-group-item"><b>Alter edo: </b>{alter_ego}</li>
               <li className="list-group-item"><b>Publisher:</b> {publisher}</li>
               <li className="list-group-item"><b>First appearence:</b> {first_appearance}</li>
            </ul>

            <h5>Characters</h5>
            <p>{characters}</p>

            <button 
               className="btn btn-outline-info"
               onClick={handleReturn}
               >
               Return
            </button>
         </div>
      </div>
   )
}
