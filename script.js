console.log("JavaScript file loaded.");

// Define an array of random facts about US presidents
const facts = [
    "George Washington was the first president of the United States.",
    "Abraham Lincoln delivered the Gettysburg Address during the American Civil War.",
    "Juliane Koepcke: In 1971, Juliane Koepcke, a 17-year-old girl, survived a plane crash in the Peruvian rainforest. She fell from the disintegrated aircraft and plummeted over 10,000 feet to the ground, but miraculously survived the fall. Despite injuries, she managed to find help after an arduous 11-day trek through the jungle.",
    "Vesna Vulović: Vesna Vulović holds the Guinness World Record for surviving the highest fall without a parachute. In 1972, Vulović was a flight attendant when the plane she was on exploded at an altitude of 33,330 feet. She plummeted to the ground but survived with severe injuries.",
    "Aron Ralston: Aron Ralston, an experienced outdoorsman, became trapped in a remote canyon in Utah in 2003 when a boulder pinned his arm. After being stuck for five days, Ralston made the extreme decision to amputate his own arm to free himself. He then rappelled down a 65-foot cliff and hiked out to find help.",
    "Harrison Okene: In 2013, Harrison Okene, a Nigerian cook, survived for three days in an air pocket 100 feet underwater after a tugboat sank off the coast of Nigeria. He was the lone survivor among the crew members, and his rescue was captured on video.",
    "Anna Bågenholm: In 1999, Anna Bågenholm, a Swedish doctor, survived being trapped under ice for 80 minutes after a skiing accident. She fell through a frozen lake and was trapped in icy water with only her face exposed. Despite severe hypothermia and cardiac arrest, she was revived and made a remarkable recovery.",
    "Pandas: Giant pandas have a reputation for being lazy due to their slow movements and love for bamboo. They can spend up to 12 hours a day eating and the rest of the time resting or sleeping. The low-nutrient content of bamboo contributes to their need for extended periods of rest.",
    "Three-Toed Sloths: Three-toed sloths are even lazier than their two-toed counterparts. They move so slowly that algae can grow on their fur, helping to camouflage them in the trees. They spend the majority of their lives hanging upside down, barely moving from one tree to another.",
    "Dugongs: Dugongs, also known as sea cows, are large marine mammals that have a very relaxed lifestyle. They spend most of their time floating along the ocean's surface, grazing on seagrass. Their slow swimming speed and gentle demeanor make them appear quite lazy.",
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

// Sandbox game variables
var gameRunning = false;

const sandboxElement = document.getElementById("sandbox");
const sandboxWidth = 600;
const sandboxHeight = 400;
const playerSize = 30;
const playerSpeed = 10;

let playerX = (sandboxWidth - playerSize) / 2;
let playerY = (sandboxHeight - playerSize) / 2;

// Function to draw the player on the sandbox
function drawPlayer() {
    //sandboxElement.innerHTML = `<div id="player"></div>`;
    const playerElement = document.getElementById("player");
    playerElement.style.left = playerX + "px";
    playerElement.style.top = playerY + "px";
}

// Function to move the player
function movePlayer(direction) {
    let newX = playerX;
    let newY = playerY;
    switch (direction) {
        case "left":
            newX -= playerSpeed;
            break;
        case "right":
            newX += playerSpeed;
            break;
        case "up":
            newY -= playerSpeed;
            break;
        case "down":
            newY += playerSpeed;
            break;
    }
    // Check if the new position is within the sandbox boundaries
    if (newX >= 0 && newX <= sandboxWidth - playerSize && newY >= 0 && newY <= sandboxHeight - playerSize) {
        playerX = newX;
        playerY = newY;
    }
    drawPlayer();
}

// Event listeners for player movement
document.addEventListener("keydown", function (event) {
    switch (event.key) {
        case "ArrowLeft":
            movePlayer("left");
            break;
        case "ArrowRight":
            movePlayer("right");
            break;
        case "ArrowUp":
            movePlayer("up");
            break;
        case "ArrowDown":
            movePlayer("down");
            break;
    }
});

// Function to start the sandbox game
function startSandboxGame() {
    if (!gameRunning) {
        gameRunning = true;
        initSandboxGame();
        console.log("Game Started!");
    }
}

// Call the start function when the Start button is clicked
const startButton = document.getElementById("start-button");
startButton.addEventListener("click", startSandboxGame);

// Initialize the sandbox game
function initSandboxGame() {
    sandboxElement.style.width = sandboxWidth + "px";
    sandboxElement.style.height = sandboxHeight + "px";
    drawPlayer();
}

// Call the initialization function when the page loads
window.addEventListener("load", initSandboxGame);
