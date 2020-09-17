import { heroes } from '../data/heroes';

export const getHeroesByPublisher = (publisher) => {

   const validPublishers = ['DC Comics', 'Marvel Comics'];
   //validando que solo vengan esos dos valores
   if(!validPublishers.includes(publisher)) {
      throw new Error(`Publisher "${publisher}" no es correcto`);
   }

   return heroes.filter(hero => hero.publisher === publisher);

}