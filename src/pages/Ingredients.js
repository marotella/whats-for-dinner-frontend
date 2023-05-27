import React from "react"
import { Link, useParams} from "react-router-dom"
import IngredientInfo from "../components/IngredientInfo"

const Ingredients = ({ingredients}) => {
    console.log(ingredients) //confirms that data is bieng passesd
    const {id} = useParams();


    const loaded = () => {
        return (
            <div className="new">
                <button>Add</button>
                <div className="ingredientList"> {ingredients.map((ingredient) => (
                    <IngredientInfo  key={ingredient.id} ingredient={ingredient} className="ingredient" />
                ))}
                </div>
            </div>)
    };

    const loading = () => {
        return <h1>Looking through the cupboards...</h1>;
    };
    return (ingredients ? loaded() : loading());
}

export default Ingredients