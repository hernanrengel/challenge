## About The Project

This was a challenge for BLITZ, the description of the challenge was as follows,

Exercise
The attached file (`discography.txt`) contains Bob Dylan’s discography.
Our goal is to get a Trello board through interacting with the Trello API, with the albums
classified in lists sorted by decade. Each album should display its year and title and show up
in the list sorted by year, and in the case of the same year alphabetically. Additionally, we'd
like each album to have the cover art if we can fetch it from Spotify.
Your solution should be able to do that from the discography file.

### Built With

- [NodeJS](https://nodejs.org/en/)
- [Axios](https://axios-http.com/)
- [Jest](https://jestjs.io/)

### Screeenshots

<p align="center"><img src="https://gitlab.com/hrengelc/challenge/-/raw/master/screens/scree1.png" alt="Screenshot"></p>

### Build project

#### env variables

  rename the file .env.example for .env and edit he values for valid cases

#### local

- npm install
- npm run build
- npm start
  -- the application runs on port 8888
  -- the main url localhost:8888/login
- npm run test

#### Docker

- docker-compose up -d
