import Card from './Card';

function Cards({characters}) {

   return (
   <div> {
      characters.map(({name, species, gender, image, id}) => {
         return <Card
         key = {id}
         name = {name}
         species = {species}
         gender = {gender}
         image = {image}
         onClose = {() => alert("Emulamos que se cierra la card")}
         />
      }
   )}
   </div>
   );
}

export default Cards;