import React from "react";

function About() {
    return (
        <div className="flex flex-col justify-center items-center w-full">
            
            <div className="flex flex-col md:flex-row m-5">
                <div>
                    <div className="p-5">
                        <img src={process.env.PUBLIC_URL + '/cuttingboard.jpg'} alt="cutting-board" className="about2" />
                    </div>
                </div>
                <div className="flex flex-col text-white p-5 bg-gradient-to-b from-green to-lightGreen m-5 items-left justify-center">
                    <p className="text-xl font-medium">About Us</p>
                    <br/>
                    <p className="">
                        Are you tired of staring into your pantry, wondering what to cook? Do you wish you could effortlessly keep track of the ingredients in your kitchen and discover exciting new recipes? We felt this way too, which is why we created Whats for Dinner?
                        <br />
                        <br />
                        We created a tool for culinary exploration and organization. Say goodbye to the chaos of recipe books, scattered ingredient lists, and uninspiring meals. With Whats for Dinner, you can take control of your kitchen and unlock a world of culinary delights.
                    </p>
                </div>
                <div>
                    <div className="p-5">
                        <img src={process.env.PUBLIC_URL + '/Stirfry.jpg'} alt="stirfry" className="about2" />
                    </div>
                </div>

            </div>
            <div className="flex flex-col md:flex-row m-5">
                <div className="flex flex-col md:flex-row m-5 p-5 justify-center">

                    <div className="flex flex-col justify-center text-white items-left bg-gradient-to-b from-green to-lightGreen p-5">
                       <b className="flex text-left text-xl">Here's what WFD offers:</b> 
                        <br />
                        <p><b>Ingredient Inventory: Keep Track of What You Have</b> 
                        <br/>
                        Never again will you buy duplicate ingredients or forget what's hiding in the back of your pantry. Or have great food go to waste. WFD allows you to easily manage and track your ingredient inventory. Know at a glance what you have and what you need, and reduce food waste.</p>
                        <br/>
                     
                        <p><b>Personalized Recipe Recommendations: Discover New Tastes</b><br/>
                        Tired of cooking the same old dishes? Whats for Dinner allows you to use your the ingredients you already have and provides personalized recipe recommendations tailored to your available ingredients. Prepare to be amazed as WFD suggests mouthwatering recipes that will ignite your culinary creativity and introduce you to new flavors.</p>
                        <br/>
                
                        <p><b>Smart Search: Find Recipes in an Instant
                        Looking for a specific recipe?</b> <br/>WFD's search functionality lets you quickly find recipes based on ingredients you already have. No more endless scrolling through generic search results or having to purchase tons of new ingredients to make a great meal. WFD streamlines the process, making it effortless to find the perfect recipe for any occasion. </p>
                    </div>
                    <div className="p-5">
                        <img src={process.env.PUBLIC_URL + '/shakshuka.jpg'} alt="shakshuka" className="about1" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About