## About The Project

This was a challenge for Rooftop Career Switch 2022, the description of the challenge was as follows,

Exercise

The objective of this challenge is to develop a function that solves a riddle. Develop an API that returns an array of ordered strings, from a string array in principle disordered, to do this should take into account ordered pairs within the root array, and then validate the result by sending a join of strings to an endpoint that will validate the answer.

### Built With

- [NodeJS](https://nodejs.org/en/)
- [Axios](https://axios-http.com/)
- [Jest](https://jestjs.io/)

### Screeenshots

<p align="center"><img src="https://github.com/hernanrengel/challenge/blob/master/screens/screen1.png" alt="Screenshot"></p>

### Build project

#### env variables

rename the file .env.example for .env and edit he values for valid cases

#### local

- npm install
- npm run build
- npm start
  - the application runs on port 8888
  - the main url localhost:8888/login
- npm run test

#### Docker

- docker-compose up -d
