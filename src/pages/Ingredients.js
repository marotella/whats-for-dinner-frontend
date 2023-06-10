import React from "react"
import { Link, useParams } from "react-router-dom"
import IngredientInfo from "../components/IngredientInfo"

const Ingredients = ({ ingredients, deleteIngredient, baseUrl }) => {
    console.log(ingredients) //confirms that data is bieng passesd
    const { id } = useParams();


    const loaded = () => {
        return (
            <div className="new m-10">
                <h3 className="flex justify-center text-xl text-orange font-medium">Welcome to your kitchen! </h3>
                <div class="flex flex-col md:flex-row p-5 items-center">
                    <h2 className="mb-4 font-medium"> Here you can view the contents of your kitchen. You can also view the details for each of your ingredients, along with update and delete items as you use them to prepare meals.</h2>
                    <Link to={`/ingredients/new`} class="flex w-1/4 text-white bg-green text-2xl hover:bg-white  hover:text-green active:bg-orange active:text-white p-2 drop-shadow-xl justify-center">
                        <button className="flex items-center">New <span className="material-symbols-outlined text-4xl justify-center p-2">
                            add_box
                        </span></button>
                    </Link>
                </div>
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