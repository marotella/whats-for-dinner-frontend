import React from "react";

function About() {
    return (
        <div className="flex flex-col justify-center items-center w-full">
            <h1 className="text-2xl font-medium text-orange mt-5">About Whats for Dinner</h1>
            <div className="flex flex-row m-5">
                <div>
                    <div className="p-5">
                        <img src={process.env.PUBLIC_URL + '/cuttingBoard.jpg'} alt="cuttingboard" className="about2" />
                    </div>
                </div>
                <div className="p-5 bg-green m-5 flex items-center">
                    <p className="text-white">
                        Are you tired of staring into your pantry, wondering what to cook? Do you wish you could effortlessly keep track of the ingredients in your kitchen and discover exciting new recipes? We felt this way too, which is why we created Whats for Dinner?
                        <br />
                        <br />
                        We provide for culinary exploration and organization. Say goodbye to the chaos of recipe books, scattered ingredient lists, and uninspiring meals. With KitchenKeeper, you can take control of your kitchen and unlock a world of culinary delights.
                    </p>
                </div>
                <div>
                    <div className="p-5">
                        <img src={process.env.PUBLIC_URL + '/Stirfry.jpg'} alt="stirfry" className="about2" />
                    </div>
                </div>

            </div>
            <div className="flex flex-row m-5">
                <div className="flex flex-row m-5 p-5 justify-center">
                    <p className="flex text-white items-center bg-green p-5">
                        Here's what KitchenKeeper offers:
                        <br />
                        <br />
                        Ingredient Inventory: Keep Track of What You Have
                        Never again will you buy duplicate ingredients or forget what's hiding in the back of your pantry. KitchenKeeper allows you to easily manage and track your ingredient inventory. Know at a glance what you have and what you need, ensuring you're always well-stocked to create amazing meals.
                        <br />
                        <br />
                        Personalized Recipe Recommendations: Discover New Tastes
                        Tired of cooking the same old dishes? KitchenKeeper analyzes your ingredient inventory and provides personalized recipe recommendations tailored to your available ingredients. Prepare to be amazed as KitchenKeeper suggests mouthwatering recipes that will ignite your culinary creativity and introduce you to new flavors.
                        <br />
                        <br />
                        Smart Search: Find Recipes in an Instant
                        Looking for a specific recipe? KitchenKeeper's smart search functionality lets you quickly find recipes based on ingredients, dietary preferences, cooking time, and more. No more endless scrolling through generic search results. KitchenKeeper streamlines the process, making it effortless to find the perfect recipe for any occasion.
                    </p>
                    <div className="p-5">
                        <img src={process.env.PUBLIC_URL + '/shakshuka.jpg'} alt="shakshuka" className="about1" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About