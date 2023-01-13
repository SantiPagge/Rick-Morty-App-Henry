function Card({name, species, gender, image, onClose}) {
//props --> {name: '', species: '', gender: '', image: '', onClose: f}
   return (
      <div>
         <button onClick={onClose}>X</button>
         <h2>{name}</h2>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <img  src={image} alt={name} />
      </div>
   );
}

export default Card;