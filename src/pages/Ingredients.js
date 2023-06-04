import React from "react"
import { Link, useParams} from "react-router-dom"
import IngredientInfo from "../components/IngredientInfo"

const Ingredients = ({ingredients, deleteIngredient}) => {
    console.log(ingredients) //confirms that data is bieng passesd
    const {id} = useParams();


    const loaded = () => {
        return (
            <div className="new">
                <h3>Welcome to your kitchen. Review, edit, add, and delete ingredients. </h3>
                <button>Add</button>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4"> {ingredients.map((ingredient) => (
                    <IngredientInfo deleteIngredient={deleteIngredient} key={ingredient.id} ingredient={ingredient} className="ingredient" />
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