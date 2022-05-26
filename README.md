# Yelp Business Assistant
CMPE 255 - Coursework Project - Business Assistant that derives insights from the Yelp Dataset for Business Owners.

## Overview
Through this project, we aim to aid new and existing small and medium business owners enhance their cus-tomer retention and satisfaction. 
We made use of Data Mining and Natural Language Pro-cessing techniques on a large customer feedback-driven dataset to determine what customers of a particular geographic location like and what factors influence their feedback the most.

Link to the dataset we used: https://www.yelp.com/dataset

## Components
frontend: This directory contains a React Application which is the frontend of our project.
  - To run it, ensure that all dependencies are installed using `npm i`.
  - Run `npm run start` to start the local development server on port 3000.

backend: This directory contains the Node.js middleware and the layer which interacts with MongoDB using Mongoose.
  - Ensure that all dependencies are installed using `npm i`.
  - Ensure that the proper environment variables are populated in the .env file. This project requires authentication link to the MongoDB database.
  - Run `npm run start` to start the local server.

model: This houses the Python notebook which has our Data mining implementation required to generate insights and various other data elements which will be shown on the frontend Business overview screen.

## Contributions

### Tuba Ahmed
-	Overall architecture and design of the application.
-	Responsible for coming up with the functional flow, UI design and use case definitions.
-	Implemented the frontend along with the node middleware layer.
-	Contributed to the initial data storage and cleaning/formatting of the dataset.
-	Linking the model output to the DB layer (MongoDB schema design and implementation).

### Devansh Alok
-	Responsible for data cleaning, retrieval and performing the initial EDA – Exploratory Data analysis.
-	Implemented Data mining techniques like Linear Regression to figure out the attributes responsible for the ratings.
-	Implemented NLP techniques to figure out positive and negative word clouds for a given business.

