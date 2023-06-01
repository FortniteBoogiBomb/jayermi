console.log("JavaScript file loaded.");

// Define an array of random facts about US presidents
const facts = [
    "Juliane Koepcke: In 1971, Juliane Koepcke, a 17-year-old girl, survived a plane crash in the Peruvian rainforest. She fell from the disintegrated aircraft and plummeted over 10,000 feet to the ground, but miraculously survived the fall. Despite injuries, she managed to find help after an arduous 11-day trek through the jungle.",
    "Vesna Vulović: Vesna Vulović holds the Guinness World Record for surviving the highest fall without a parachute. In 1972, Vulović was a flight attendant when the plane she was on exploded at an altitude of 33,330 feet. She plummeted to the ground but survived with severe injuries.",
    "Aron Ralston: Aron Ralston, an experienced outdoorsman, became trapped in a remote canyon in Utah in 2003 when a boulder pinned his arm. After being stuck for five days, Ralston made the extreme decision to amputate his own arm to free himself. He then rappelled down a 65-foot cliff and hiked out to find help.",
    "Harrison Okene: In 2013, Harrison Okene, a Nigerian cook, survived for three days in an air pocket 100 feet underwater after a tugboat sank off the coast of Nigeria. He was the lone survivor among the crew members, and his rescue was captured on video.",
    "Anna Bågenholm: In 1999, Anna Bågenholm, a Swedish doctor, survived being trapped under ice for 80 minutes after a skiing accident. She fell through a frozen lake and was trapped in icy water with only her face exposed. Despite severe hypothermia and cardiac arrest, she was revived and made a remarkable recovery.",
    "Pandas: Giant pandas have a reputation for being lazy due to their slow movements and love for bamboo. They can spend up to 12 hours a day eating and the rest of the time resting or sleeping. The low-nutrient content of bamboo contributes to their need for extended periods of rest.",
    "Three-Toed Sloths: Three-toed sloths are even lazier than their two-toed counterparts. They move so slowly that algae can grow on their fur, helping to camouflage them in the trees. They spend the majority of their lives hanging upside down, barely moving from one tree to another.",
    "Dugongs: Dugongs, also known as sea cows, are large marine mammals that have a very relaxed lifestyle. They spend most of their time floating along the ocean's surface, grazing on seagrass. Their slow swimming speed and gentle demeanor make them appear quite lazy.",
    "The New Caledonian crow is known for its remarkable problem-solving skills. It can create and use tools to obtain food!",
    "Pigeons have an incredible sense of direction and can find their way back home even when released hundreds of miles away!",
    "The Clark's nutcracker bird has an amazing memory and can remember the locations of thousands of individual seeds it buries for later!",
    "The production of American cheese involves heating, emulsifying, and blending different cheese types to achieve the desired characteristics.",
    "While American cheese is not typically aged like traditional cheeses, its unique processing methods give it a distinct taste and texture.",
    "The Moon changes its shape, just like a pancake that sometimes looks like a full circle and other times like a tiny crescent.",
    "Now, here's a fact that'll make you scratch your head. Armadillos, them critters with armored shells, can jump three to four feet in the air when they get spooked. It's like watchin' a tiny buckin' bronco!",
    "Ever heard of a chicken wearin' blue jeans? Well, in 1979, a chicken named Mike survived for 18 months without a head! Ain't that somethin'? Must've had some real country grit.",
    "Y'all ever had a hankerin' for some fried chicken? Well, the Colonel himself, Colonel Sanders, started Kentucky Fried Chicken at the ripe age of 65! Proof that it's never too late to chase your fried dreams!",
    "Ants are master farmers.Some species cultivate their own gardens, growing fungus as a food source.They carefully tend to their fungal crops, ensuring they have the right conditions for growth.It's like having green thumbs, but on a whole different level.",
    "Ants have an extraordinary sense of smell.They can detect the tiniest traces of pheromones, chemical signals that guide them to food sources or help them communicate with other ants.It's like having a built-in GPS that leads them straight to success.",
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

// Endpoint URL for CountAPI
//const countAPIEndpoint = 'https://api.countapi.xyz/update/jayermi.com/visit-count/?amount=1';
// Function to update the count
//function updateCount() {
//    fetch(countAPIEndpoint)
//        .then(response => response.json())
//        .then(data => {
//            document.getElementById('visit-count').textContent = data.value;
//        })
//       .catch(error => {
//            console.log('Error updating count:', error);
//       });
//}
// Call the updateCount function to fetch and display the count on page load
//updateCount();



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
    const sandbox = document.getElementById("sandbox");

    // Remove the previous player element if it exists
    const previousPlayerElement = sandbox.querySelector(".player");
    if (previousPlayerElement) {
        previousPlayerElement.remove();
    }

    const playerElement = document.createElement("div");
    playerElement.className = "player";
    playerElement.style.left = playerX + "px";
    playerElement.style.top = playerY + "px";

    sandbox.appendChild(playerElement);
}
// Function to move the player
function movePlayer(direction) {
    if (gameRunning) { // Check if the game is running
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

    playerX = (sandboxWidth - playerSize) / 2;
    playerY = (sandboxHeight - playerSize) / 2;

    drawPlayer();
}
// Call the initialization function when the page loads
window.addEventListener("load", initSandboxGame);

document.addEventListener("DOMContentLoaded", function () {
    var lastUpdatedElement = document.getElementById("last-updated");
    var lastUpdatedDate = new Date(document.lastModified).toLocaleDateString();
    lastUpdatedElement.textContent = "Last Updated: " + lastUpdatedDate;
});
