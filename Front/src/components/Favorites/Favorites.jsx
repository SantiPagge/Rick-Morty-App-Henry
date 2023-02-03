import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { filterCards, orderCards } from "../../redux/actions";


const Favorites = () => {
    const dispatch = useDispatch();
    const { myFavorites } = useSelector(state => state);

    const handleOrder = (event) => {
        dispatch(orderCards(event.target.value))
    }

    const handleFilter = (event) => {
        dispatch(filterCards(event.target.value))
    }

    return(
        <div>
            <select name="order" onChange={handleOrder}>
                <option selected="true" disabled="disabled">Order By</option>
                <option value="All">All</option>
                <option value="Ascendente">Ascendente</option>
                <option value="Descendente">Descendente</option>
            </select>
            <select name="filter" onChange={handleFilter}>
                <option selected="true" disabled="disabled">Filter By</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Genderless">Genderless</option>
                <option value="Unknown">Unknown</option>
            </select>
            {
                myFavorites.map(char => {
                    return(
                        <div>
                            <div>
                                <img src={char.image} alt={char.name} />
                            </div>

                            <div>
                                <div>
                                    <Link to={`/detail/${char.id}`}>
                                        <h2>{char.name}</h2>
                                    </Link>
                                </div>

                                <div>
                                    <h2>Specie: {char.species}</h2>
                                    <h2>Gender: {char.gender}</h2>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Favorites;