// Spotify configuration
const LAMBDA_URL =
  "https://vwops3pb6pj3xlajr4i7gikawe0gvfcz.lambda-url.us-east-2.on.aws/"; // Replace with your actual Lambda URL

// Function to create a track element
function createTrackElement(track, isTopTrack = false) {
  const trackElement = document.createElement("div");
  trackElement.className = isTopTrack ? "track top-track" : "track";

  const spotifyEmbed = document.createElement("iframe");
  spotifyEmbed.src = `https://open.spotify.com/embed/track/${track.id}`;
  spotifyEmbed.width = "100%";
  spotifyEmbed.height = isTopTrack ? "380" : "80";
  spotifyEmbed.frameBorder = "0";
  spotifyEmbed.allow = "encrypted-media";
  spotifyEmbed.className = "spotify-embed";

  trackElement.appendChild(spotifyEmbed);
  return trackElement;
}

// Function to display top tracks
function displayTopTracks(tracks) {
  const spotifyData = document.getElementById("spotify-data");
  spotifyData.innerHTML = "";

  const topTracksContainer = document.createElement("div");
  topTracksContainer.className = "top-tracks-container";

  // Create main track (first track)
  const mainTrack = createTrackElement(tracks[0], true);
  topTracksContainer.appendChild(mainTrack);

  // Create vertical list for other tracks
  const otherTracksList = document.createElement("div");
  otherTracksList.className = "other-tracks-list";

  // Add remaining tracks (2-5)
  for (let i = 1; i < 5; i++) {
    const trackElement = createTrackElement(tracks[i]);
    otherTracksList.appendChild(trackElement);
  }

  topTracksContainer.appendChild(otherTracksList);
  spotifyData.appendChild(topTracksContainer);
}

// Function to display recently played tracks
function displayRecentlyPlayed(tracks) {
  const spotifyData = document.getElementById("spotify-data");
  spotifyData.innerHTML = "";

  const recentlyPlayedContainer = document.createElement("div");
  recentlyPlayedContainer.className = "top-tracks-container";

  // Create main track (first track)
  const mainTrack = createTrackElement(tracks[0], true);
  recentlyPlayedContainer.appendChild(mainTrack);

  // Create vertical list for other tracks
  const otherTracksList = document.createElement("div");
  otherTracksList.className = "other-tracks-list";

  // Add remaining tracks (2-5)
  for (let i = 1; i < 5; i++) {
    const trackElement = createTrackElement(tracks[i]);
    otherTracksList.appendChild(trackElement);
  }

  recentlyPlayedContainer.appendChild(otherTracksList);
  spotifyData.appendChild(recentlyPlayedContainer);
}

// Function to handle toggle button clicks
function handleToggleClick(event) {
  const buttons = document.querySelectorAll(".toggle-btn");
  buttons.forEach((btn) => btn.classList.remove("active"));
  event.target.classList.add("active");

  const view = event.target.dataset.view;
  if (view === "top") {
    displayTopTracks(spotifyData.topTracks.items);
  } else {
    displayRecentlyPlayed(
      spotifyData.recentlyPlayed.items.map((item) => item.track)
    );
  }
}

// Store Spotify data globally
let spotifyData = null;

// Function to fetch and display Spotify data
async function fetchSpotifyData() {
  try {
    const response = await fetch(LAMBDA_URL);
    spotifyData = await response.json();

    // Display top tracks by default
    displayTopTracks(spotifyData.topTracks.items);

    // Add event listeners to toggle buttons
    const toggleButtons = document.querySelectorAll(".toggle-btn");
    toggleButtons.forEach((button) => {
      button.addEventListener("click", handleToggleClick);
    });
  } catch (error) {
    console.error("Error fetching Spotify data:", error);
    document.getElementById("spotify-data").innerHTML =
      '<div class="error">Error loading Spotify data. Please try again later.</div>';
  }
}

// Fetch Spotify data when the page loads
document.addEventListener("DOMContentLoaded", fetchSpotifyData);
