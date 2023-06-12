# What's for Dinner

Live Link:

What's For Dinner, is an application which allows a user to track what ingredients they have in thier kitchen, and find recipes that they can make using those ingredients. The application works to reduce food waste, ease deicsion making around meal times, and discover new recipes.

## Technologies Used

- Flask
- SQLite/Postgresql
- React
- Tailwind
- Flexbox
- Heroku 
The application also uses data from an external API: https://www.themealdb.com/api.php


## Installation:
- Necessary to install: Flask, React, Tailwind, Heroku, Peewee, SQLite, CORS, Dotenv, Gunicorn


## Approach
- Developed full CRUD operations using Flask.
- Fetched data from external API and reviewed data structure using Postman
- Developed frontend components and connected to the backend.
- Implemented user authorization, by using state in React.
- Included a third party API - https://www.themealdb.com/api.php for search and data images
- Deployed online and accessible to the public via Heroku
- Used Trello throughout the process for project management.

## Models

Ingredients:
 - ingredient: String
 - quantity: integer

Users:
 - username: String
 - email: email
 - password: String

## Routes

User Routes:
Register: users/register - POST
Login: users/login - POST
Logout: users/logout - GET

Ingredient Routes:
Index: /ingredients - GET
Show: /ingredients/<id> - GET
Update: /ingredients/<id> - PUT
Create: /ingredients - POST
Delete: /ingredients/<id> - DELETE

Recipe Routes:
Search: /ingredients/api/search - POST
Show: /ingredients/api/recipes/<recipe_id> - GET

## User Stories

This application was designed for folks who enjoy cooking, want to reduce food waste, but may not have time or energy to find new recipes. The user to can mantain a database of their kitchen ingredients. The can view, edit, and update items in their kitchen. They can then use the ingredients they have to search a database of recipes that use those ingredients. They can view the full recipe and instructions on how to make the dish.


## Initial Wireframe

Home: 
image.png

Register/Sign in:
image.png

New form:
image.png

Edit form:
image.png

Index:
image.png

Show:
image.png

Search:
image.png

Search result:
image.png

## Final Design


## Next Steps:

- Continue to modify the code for mobile rendering.
- Implement a one to many relationship to allow for multiple users.
- Add in a shopping list feature 

