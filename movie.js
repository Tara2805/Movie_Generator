// Define arrays of movies
let movies1 = ["Hunger games", "Pulp Fiction", "Goodfellas", "The godfather", "Asteroid city", "The three musketeers", "Blue beetle", 
"The Last Voyage of the Demeter", "Kung fu Panda 4", "Madame Web", "The tearsmith", "Damsel", "Wonka", "Wish", "Rebel moon", "Tenant"];
let watched = ["Barbie", "Avatar 2", "Intersteller"];

//now lets ensure that one of those movies is randomly returned to the client end
function generateRandomMovie() {
//adding some sound effects when we click the button
  document.getElementById("soundEffect").play();

  if (movies1.length === 0) {
    // If all movies have been watched
    document.getElementById("movie").textContent = "No more movies to watch!";
    return;
  }
  
  // Get a random index from the movies array
  const randomMovieIndex = Math.floor(Math.random() * movies1.length);
  // Get the movie at that index
  const chosenMovie = movies1[randomMovieIndex];
  // Remove the selected movie from movies1 array
  movies1.splice(randomMovieIndex, 1);
  // Add the chosen movie to the watched array
  watched.push(chosenMovie);
  // Display the random movie
  document.getElementById("movie").textContent = chosenMovie;
}