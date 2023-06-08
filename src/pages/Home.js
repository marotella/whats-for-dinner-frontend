import React from "react";
import {Link} from "react-router-dom"
function Home({ loginUser, registerUser }) {
    return (
        <div className="homeContainer flex flex-col md: flex-row">
            <div className="homeSection1 flex flex-col md: flex-row m-5">
                <div className="description1">
                    <p>Open your refrigerator at the end of the day and not sure what to make? Want to try new recipes using the food you have on hand? Order out less? Try using, "What's for Dinner?" and make answering the question easier and a lot more fun!</p>
                    <h3>Sign up or Login to get started!</h3>
                    <div className="buttonHome flex justify-center">
                    <Link to={`/user/login`} class="flex text-green bg-white hover:text-orange text-m font-medium m-2 p-2 justify-center"><button>Sign In</button></Link>
                    <Link to={`/user/register`} class="flex text-green bg-white hover:text-orange text-m font-medium m-2 p-2 justify-center"><button>Register</button> </Link>
                    </div>
                </div>
                <div className="homeImage">
                    <img src={process.env.PUBLIC_URL + '/Veggies.jpg'} alt="vegetables" className="homeImage1" />
                </div>
            </div>
            <div className="recipeCarousel">

            </div>
            <div className="homeSection2 flex flex-col md: flex-row m-5">
                <div className="homeImage">
                <img src={process.env.PUBLIC_URL + '/WFDingredients.jpg'} alt="ingredietns" className="homeImage1" />
                </div>
                <div className="description2">
                    <p>
                    Once you create and account you can get started finding new recipes and reducing food waste!
                    <br/>
                    <bt/>
                    Store and update the ingredients you have on hand in <b>My Kitchen!</b> 
                    <br/>
                    <br/>
                    Using the What's for Dinner Recipe Book, search for new and easy recipes that use what you have on hand and enjoy!</p>
                </div>
            </div>
        </div>
    )
}

export default Home