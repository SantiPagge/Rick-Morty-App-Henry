import { Link } from "react-router-dom";
import { addFavorite, deleteFavorite } from "../../redux/actions";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function Card({name, species, gender, image, onClose, id}) {
//props --> {name: '', species: '', gender: '', image: '', onClose: f}
   const dispatch = useDispatch();
   const { myFavorites } = useSelector(state => state);
   const [ isFav, setIsFav ] = useState(false);

   const handleFavorite = () => {
      if(isFav){
         setIsFav(false);
         dispatch(deleteFavorite(id));
      }
      else{
         setIsFav(true);
         dispatch(addFavorite({ name, gender, onClose, species, image, id }));
      }
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   return (
      <div>
         {
            isFav ? (
               <button onClick={handleFavorite}>❤️</button>
            ) : (
               <button onClick={handleFavorite}>🤍</button>
            )
         }
         <div>
            <img src={image} alt={name} />
         </div>

         <div>
            <div>
               <Link to={`/detail/${id}`}>
                  <h2>{name}</h2>
               </Link>
            </div>

            <div>
               <h2>Specie: {species}</h2>
               <h2>Gender: {gender}</h2>
            </div>

            <div>
               <button onClick={onClose}>X</button>
            </div>
         </div>
      </div>
   );
}


export default Card;