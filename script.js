// Define an array of random facts about US presidents
const facts = [
  "George Washington was the first president of the United States.",
  "Abraham Lincoln delivered the Gettysburg Address during the American Civil War.",
  // Add more facts here
];

// Get references to the container and button elements
const container = document.getElementById("random-fact-container");
const button = document.getElementById("random-fact-button");

// Function to generate and display a random fact
function displayRandomFact() {
  console.log("Button clicked!");
  // Generate a random index within the range of the facts array
  const randomIndex = Math.floor(Math.random() * facts.length);
  // Get the random fact using the random index
  const randomFact = facts[randomIndex];
  // Update the content of the container element with the random fact
   container.textContent = randomFact;
   
}

// Add a click event listener to the button
button.addEventListener("click", displayRandomFact);
