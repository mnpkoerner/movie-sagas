# Weekend Challenge: Movie Saga

## Description
For this week of Prime Digital Academy's Full-Stack Engineering bootcamp, we were tasked with building a full-stack application to store and display movie posters. Imagine having the ability as your stroll through a movie theater, to click on the posters you see to get more information about the film! This application displays movies along with their posters in the home page. When the user clicks on a movie, they're routed to a new page with more information about the movie, a description and it's genres. If the user doesn't see a movie they're curious about on the home page, they can navigate to a form where they can add a new movie (along with it's poster and description) to the database. Special note, that the url for the poster is a relative path. Please drag the posters you want in the /public/images directory and link to them from that source.

## Screen Shots
![Home page](/public/images/home.png)
![A view of the details](/public/images/details.png)
![Form to add a new movie](/public/images/add.png)

### Prerequisites
* NodeJS
* PostgreSQL/Postico
* React
* Redux
* Saga

## Installation
1. Type `npm install` to install all dependencies
1. Create Postgres/Postico database per information in `data.sql`
1. Type `npm run server` to start your NodeJS server
1. Type `npm run client` to launch the react app on your browser

## Built With
* NodeJS
* React
* Redux
* Express
* Saga
* Material UI
* Postgres/Postico

## Usage
1. As a user, click any of the posters on the home page
1. You'll be navigated to a separate page with specific information about that movie!
1. When you're finished reading, click the button at the bottom of the page to return home.
1. You can input a new movie by clicking the `Add a Movie` button on the home page
1. Fill out all the boxes in the form
1. Click `Submit` to store the movie in the database
1. Click `Return Home` to go back to the list of all movies on the home page


## Acknowledgements
Huge thanks to everyone at [Prime Digital Academy](http://primeacademy.io)for teaching me the skills I needed to build something like this. Huge thanks especially to [Dane Smith](), [Kris Szafranski](https://github.com/kdszafranski), and [Edan Schwartz](https://github.com/eschwartz).

Thanks also to my classmates [Sean Wade](https://github.com/swadezy), [Nate MacLaurin](https://github.com/NateMacLaurin), and [Woody Kromar](https://github.com/wkromar) for crashing the boards with me this last week and helping get a handle on the material!
