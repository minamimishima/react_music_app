import axios from 'axios';

class SpotifyClient {
  static async initialize() {
    const response = await axios.post('https://accounts.spotify.com/api/token',
      { 
        grant_type: 'client_credentials',
        client_id: process.env.REACT_APP_SPOTIFY_CLIENT_ID,
        client_secret: process.env.REACT_APP_SPOTIFY_CLIENT_SECRET,
      },
      { 
        headers: {
          'Content-Type' : 'application/x-www-form-urlencoded',
        }
      }
    );

    let spotify = new SpotifyClient();
    spotify.token = response.data.access_token;
    return spotify;
  }

  test () {
    console.log(this.token);
  }
}

const spotify = await SpotifyClient.initialize();
export default spotify;
