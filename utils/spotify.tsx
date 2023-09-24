// utils/spotify.js
import axios from 'axios';

const spotifyClientId = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID;
const spotifyClientSecret = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET;

async function getAccessToken() {
  const authHeader = Buffer.from(`${spotifyClientId}:${spotifyClientSecret}`).toString('base64');

  const response = await axios.post(
    'https://accounts.spotify.com/api/token',
    'grant_type=client_credentials',
    {
      headers: {
        Authorization: `Basic ${authHeader}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    }
  );

  return response.data.access_token;
}

async function getRecentTracks() {
  try {
    const accessToken = await getAccessToken();
    
    const response = await axios.get(
      'https://api.spotify.com/v1/me/player/recently-played?limit=5', // Fetch the recent 5 tracks
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    return response.data.items;
  } catch (error) {
    console.error('Error fetching recent tracks:', error);
    return []; // Return an empty array or handle the error as needed
  }
}

export { getRecentTracks };
