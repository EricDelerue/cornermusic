// PACKAGE REFERENCES

//import promise from "es6-promise";
//import fetch from "isomorphic-fetch";

// INITIALIZATION

const API_BASE_URL = "https://itunes.apple.com"; // ?term=jack+johnson

// HELPER FUNCTIONS

const mapToTracks = tracks => {
  return tracks.map((track, i) => {
    return mapToTrack(track, i);
  });
};

const mapToTrack = (track, i) => ({
  index: i,
  id: track.trackId,
  artist: track.artistName,
  title: track.trackName,
  album: track.collectionName,
  release: track.releaseDate,
  price: track.trackPrice,
  currency: track.currency,
  duration: track.trackTimeMillis,
  genre: track.primaryGenreName,
  excerpt: track.previewUrl,
  thumb30: track.artworkUrl30,
  thumb60: track.artworkUrl60,
  thumb100: track.artworkUrl100,
  artistPic: track.artistViewUrl,
  albumPic: track.collectionViewUrl
});

// SERVICE

export const fetchTracksApi = keywords => {
  const url = `${API_BASE_URL}/search?term=${keywords}`;

  /*
    return new Promise((resolve, reject) => {
    	  
    	  fetch(url)
    	  //.then( response => response.json() )
    	  .then(response => {
    	  	//console.log('fetchTracks',JSON.stringify(response.json()));
    	  	let obj = JSON.parse(response.json());
          return obj;
    	  	//return response.json();
    	  	//return JSON.stringify(response);
    	  })
    	  //.then( json => json.results )
    	  .then( ( tracks ) => resolve( mapToTracks(tracks) ) )
    	  .catch(error => {
          console.log(error);
          return reject(error);
        });
            
    });
    */

  /*
     * This allows us to perform declarative HTTP requests to a server. 
     * For each request, it creates a Promise which must be resolved in order to define the content type and access the data.
     * 
     * The fetch() method returns a Promise that resolves the Response from the Request to show the status (successful or not). 
     * If you ever get this message promise {} in your console log screen, don’t panic — it basically means that the Promise works, but is waiting to be resolved. 
     * So in order to resolve it we need the .then() handler (callback) to access the content.
     * 
     * We first define the path (Fetch), secondly request data from the server (Request), thirdly define the content type (Body) and last but not least, we access the data (Response).
     
     Object
			description: "Impossibile eseguire fetch"
			message: "Impossibile eseguire fetch"
			number: -2147418113

			error: Object
			code: 12
			message: "Impossibile leggere."
			name: "SyntaxError" 
     */

  return fetch(url, {
    method: "GET",
    headers: {
      "Access-Control-Allow-Origin": "http://localhost:9000",
      //'Access-Control-Allow-Origin':'https://www.itineranda.com',
      "Content-Type": "application/json; charset=utf-8",
      Accept: "application/json"
    },
    mode: "cors"
  })
    .then(response => {
      return response.json();
    })
    .then(json => mapToTracks(json.results))
    .catch(error => {
      //if (error instanceof SyntaxError) {
      //    console.log('error instanceof SyntaxError', error);
      //} else {
      //    console.log('error', error);
      //}

      return error;
    });
};
