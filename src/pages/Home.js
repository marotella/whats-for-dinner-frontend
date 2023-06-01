import React from "react";

function Home({ loginUser, registerUser }) {
    return (
        <div className="homeContainer">
            <div className="homeSection1">
                <div className="description1">
                    <p>Open your refrigerator at the end of the day and not sure what to make? Want to try new recipes using the food you have on hand? Order out less? Try using, "What's for Dinner?" and make answering the question easier and a lot more fun!</p>
                    <h3>Sign up or Login to get started!</h3>
                    <div className="buttonHome">
                        <button>Sign In</button>
                        <button>Register</button>
                    </div>
                </div>
                <div className="homeImage">
                    <img src={process.env.PUBLIC_URL + '/Veggies.jpg'} alt="vegetables" className="homeImage1" />
                </div>
            </div>
            <div className="recipeCarousel">

            </div>
            <div className="homeSection2">
                <div className="homeImage">
                <img src={process.env.PUBLIC_URL + '/WFDingredients.jpg'} alt="ingredietns" className="homeImage1" />
                </div>
                <div className="description2">
                    Store and update the ingredients you have on hand in <b>My Kitchen!</b> 
                    <br/>
                    Using the What's for Dinner recipe book, search for new and easy recipes that use what you have on hand and enjoy!
                </div>
            </div>
        </div>
    )
}

export default Home