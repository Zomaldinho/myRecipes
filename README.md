# My Recipe App

A simple app to view, save, update, delete my recipes <br/>

This is a MERN app which uses React and Bootstrap for the front end and Node JS (Express) and MongoDB (Mongoose) for the backend

## Installation

Clone the Github repository and use npm to install dependencies at the server folder <br/>
```
$ git clone https://github.com/Zomaldinho/myRecipes
$ cd myRecipes
$ cd server
$ npm install
```
After installation run `$ npm start` to start the server at port 5000 and make sure that the following message are shown in the terminal `App is working on port 5000` and `Successfully connected to the database`. if not, restart the server by pressing CTRL+C and `$ npm start` again <br/>
Then open a new terminal window inside the **frontend** folder.
Finally start the front end with `$ npm start` at port 3000

## Usage
The home page is where I can view the recipes That was created previously, they can be deleted with **Delete** button and they can be viewed with more details if you click on **More Details** button <br/>
On more details page you can edit the recipe's title, ingredients and/or recipe, to do so just click on **edit** button, a form will be shown below where you can enter the updated info <br/>
finally you can add new recipes by clicking on **Add New Recipe** button in the Navbar and filling the required data