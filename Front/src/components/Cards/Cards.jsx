import Card from '../Card/Card';
// import characters, { Rick } from './data.js'

function Cards({characters, onClose}) {

   return (
   <div> {
      characters.map(({name, species, gender, image, id}) => {
         return <Card
         key = {id}
         name = {name}
         species = {species}
         gender = {gender}
         image = {image}
         onClose = {() => onClose(id)}
         id={id}
         />
      }
   )}
   </div>
   );
}

export default Cards;