import React from "react";

function Home({loginUser, registerUser}) {
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
                <img src={process.env.PUBLIC_URL + '/Veggies.jpg'} alt="vegetables" className="homeImage1"/>
                </div>
            </div>
            <div className="homeSection2">
                <div className="homeImage">

                </div>
                <div className="description2">

                </div>
            </div>
        </div>
    )
}

export default Home