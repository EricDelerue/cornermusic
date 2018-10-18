# Project Overview

*October 2018*

As required in the Test Frontend file, Corner Music is a Single Page Application (SPA) built using libraries like React, React Router for pages and navigation, and Redux for application state. 

The application gets tracks data from a third party API (iTunes). Fetching data is managed through fetch API. 

It allows the users to select and listen to a track.

## Demo
  
  Follow this link to see a [DEMO](https://www.itineranda.com/cornermusic/) of this app.

## iTunes API issues

Sometimes, the iTunes API rejects single words without uppercase letters, such as sting or gaga (CORS issue). Try with Sting or Lady Gaga. It is advisable to insist and insert several words for the search.

## Author: 

Eric Delerue
delerue_eric@hotmail.com

## Note: 

The author was not in the right conditions to complete the test, but hopes to have achieved the necessary and sufficient features to allow Corner Job's technicians to evaluate his skills and potential.

The following functionalities do not appear in the project:

- implement a search filter to sort the list over the song length, the genre and the price. 

- implement a social bar to share each track on a social network. 

## What this app currently does:

- Search for tracks by keywords
- Select and listen to a track. 
- Switch to previous or next track from the search list.

## This project includes:

	- A typical React project layout structure
	- Babel setup and configuration
	- Webpack setup and configuration 
	- dotenv setup included
	- SCSS setup and configuration
	- Redux to manage application state
	- React Router to setup navigation

## Primary Components

The root application component (App), is composed of 3 primary components:

Header 
	- A heading that displays application title "Corner Music"

Tracks Search Page 
	- The "landing page" that the application opens on. It is used to search for tracks by querying the iTunes API.

Track Player Page 
	- Show a player (backward, play/pause, forward) and a picture and info associated with the track. 

## Made on/with:

  - Windows 10
  - IE Edge
  - node 10.11.0
  - npm 6.4.1
  - React 16
  - Redux 4
  - Webpack 4

## Installation:

Put the files in a directory (i.e.: /cornermusic/)

Edit the src/services/fetchTracksApi.js file and modify the request headers if necessary.

Open the command line and type: 

	npm install

Then

	npm start 

A browser window will open http://localhost:9000/
