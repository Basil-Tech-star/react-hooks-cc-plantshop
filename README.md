### Plantsy: 
### A Plant Catalog App
Plantsy is a simple React application that allows users to browse, add, update, search, and delete plants in a catalog. The app fetches plant data from a backend API and displays them in a list format. Users can update the price of plants, mark them as "sold out," and add new plants to the catalog.

### Table of Contents
1. Project Overview
2. Features
3. Installation Instructions
4. App Structure
5. Components
   . App.js
   .  Header.js
   .  NewPlantForm.js
   .  PlantCard.js
   .  PlantList.js
   .  PlantPage.js
   .  Search.js
   .  index.js
6. API Endpoints
7. Styling
8. Contributing
9. Fork the repository
10. Technology used
11. Deployment Live Lnk
12. Author
13. License

### Project Overview
Plantsy is a catalog app where users can view and manage a list of plants. The main features include:

  . Viewing Plants: Displays a list of plants fetched from a backend server.
  .  Adding Plants: Users can add new plants to the catalog by submitting a form.
  . Updating Plant Price: Users can update the price of plants in the catalog.
  . Deleting Plants: Plants can be removed from the catalog.
  . Searching: Users can search for plants by name.
  . Sold Out Toggle: Users can toggle the availability of plants, marking them as "Sold Out" or "In Stock".

The app is built with React, utilizing hooks such as useState and useEffect for state management and side effects.

## Features
. Add a New Plant: Users can add a plant to the catalog with a name, image URL, and price.
. Update Price: Users can update the price of any plant in the catalog.
. Search Plants: Search plants by name as users type.
. Mark Plants as Sold Out: Toggle the availability status of plants.
. Delete Plants: Remove a plant from the catalog entirely.
. Responsive Design: The app is mobile-friendly and works on various screen sizes.
#### Installation Instructions
### Prerequisites
. Node.js: Ensure that Node.js is installed on your machine.
. React: This app is built using React, so you will need to have React and its dependencies installed.
### Steps
## Clone the repository:



git clone https://github.com/yourusername/plantsy.git
Navigate into the project directory:


## cd plantsy
Install the required dependencies:


## npm install
Start the app:



## npm start
This will run the app on http://localhost:3000.

## App Structure

/src
  /components
    App.js
    Header.js
    NewPlantForm.js
    PlantCard.js
    PlantList.js
    PlantPage.js
    Search.js
  index.js
  index.css
#### Components
### App.js
App.js is the main component of the app. It manages the state for plants, search query, and loading status. It also handles the logic for fetching, adding, updating, and deleting plants.

## Key Features:
State Management: Handles plants, searchQuery, and isLoading states.
useEffect: Fetches plant data from the API when the component mounts.
addPlant, updatePrice, deletePlant: Handles adding new plants, updating plant prices, and deleting plants via API requests.
Filtering: Filters plants based on the search query.
### Header.js
Header.js is a simple functional component that displays the title of the app.

## Key Features:
Displays "Plantsy" with a plant emoji logo.
### NewPlantForm.js
NewPlantForm.js provides a form for users to input new plant details, including the name, image URL, and price. Upon form submission, it sends a POST request to the backend to add the new plant.

## Key Features:
Form Handling: Captures user input for name, image URL, and price.
addPlant: Calls the addPlant function passed as a prop to add the new plant to the catalog.
### PlantCard.js
PlantCard.js displays individual plant details, including the name, price, and availability status. Users can update the price, toggle the "sold out" status, or delete the plant.

## Key Features:
Price Update: Allows users to update the price of a plant.
Sold Out Toggle: Allows users to toggle the availability of a plant.
Delete Button: Deletes the plant from the catalog.
### PlantList.js
PlantList.js renders a list of PlantCard components, passing down the necessary data and functions as props.

## Key Features:
Mapping Plants: Iterates over the plants array to display each plant in a PlantCard.
### PlantPage.js
PlantPage.js is the main content page of the app. It includes the NewPlantForm, the search bar, and the PlantList.

## Key Features:
Loading State: Displays a "Loading..." message while the data is being fetched.
Add Plant Form: Renders the form to add new plants.
Search Bar: Renders the search bar to filter the plant list.
### Search.js
Search.js provides a search bar that allows users to search plants by name.

## Key Features:
Search Input: Captures the search query and filters the list of plants by name.
Debounced Search: As the user types, the app immediately filters the plant list.
### index.js
index.js is the entry point for the app. It renders the root App component and attaches it to the DOM.

### API Endpoints
The app interacts with a backend API at http://localhost:6001/plants to perform CRUD operations.

GET /plants: Fetches a list of all plants.
POST /plants: Adds a new plant to the catalog.
PATCH /plants/:id: Updates the price of a plant by its ID.
DELETE /plants/:id: Deletes a plant by its ID.
Styling
The app uses basic CSS for styling. You can modify the index.css file to adjust the look and feel of the app. The components make use of simple class names for styling.

### Contributing
If you would like to contribute to this project, follow these steps:

### Fork the repository.
Create a new branch (git checkout -b feature-name).
Make your changes.
Commit your changes (git commit -am 'Add new feature').
Push to the branch (git push origin feature-name).
Create a pull request.
### Technology used
React
Html
Javascript
Css
Git
Github

### Deployment Live Link
https://react-hooks-cc-palantshop.netlify.app/

### Author
Basil Wabuke
### License
This project is licensed under the MIT License Copyright (c) 2024 Basil Wabuke