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
    "Some dinosaurs engaged in elaborate courtship rituals, such as head-butting and tail-whipping, to attract mates.",
    "Certain dinosaur species laid eggs in communal nests, indicating a cooperative nesting behavior.",
    "Fossil evidence suggests that some dinosaurs may have displayed colorful plumage or elaborate crests to attract mates, similar to modern-day birds.",
    "There have been numerous reports of unidentified flying objects (UFOs) exhibiting extraordinary speed and maneuverability beyond the capabilities of known human-made aircraft.",
    "Pilots and military personnel have reported encounters with unidentified aircraft that demonstrate unconventional flight patterns, such as sudden changes in direction or hovering without visible means of propulsion.",
    "Some unidentified aircraft sightings have been accompanied by corroborating radar data, capturing the presence of objects moving at high speeds or exhibiting unusual flight characteristics.",
    "The Mariana Trench, located in the western Pacific Ocean, is the deepest part of the world's oceans, reaching a depth of approximately 36,070 feet (10,994 meters).",
    "Deep-sea exploration has revealed the existence of hydrothermal vents, where mineral-rich fluids spew out of the ocean floor, supporting unique ecosystems adapted to extreme conditions.",
    "Scientists have discovered new species during deep-sea exploration, some of which exhibit fascinating adaptations such as bioluminescence or transparent bodies.",
    "Thomas Midgley Jr., an inventor, played a role in the development of both leaded gasoline and chlorofluorocarbons (CFCs), both of which had detrimental effects on the environment and human health.",
    "Franz Reichelt, an Austrian tailor and inventor, tragically lost his life while testing a parachute suit he had designed, as the suit failed to provide sufficient air resistance for a safe descent.",
    "Marie Curie, the renowned physicist and chemist, faced health issues and ultimately succumbed to radiation-related illnesses resulting from her groundbreaking research on radioactivity.",
    "The Tunguska event, which occurred in 1908 in Siberia, is one of the most mysterious explosions in history. It flattened over 770 square miles of forest, but no impact crater or debris from a meteorite was found at the site.",
    "The Voynich Manuscript, a mysterious 15th-century book written in an unknown language or code, has confounded linguists, historians, and cryptographers for centuries, and its meaning remains undeciphered.",
    "The Dancing Plague of 1518 was a strange phenomenon in which hundreds of people in Strasbourg, France, danced uncontrollably for days, some even dying from exhaustion or heart attacks. The cause of this mass hysteria remains unexplained.",
    "The disappearance of the Roanoke Colony in 1590 is a puzzling historical mystery. The settlement in present-day North Carolina vanished without a trace, with the word 'Croatoan' carved into a tree as the only clue left behind.",
    "The Taos Hum is a persistent low-frequency humming sound heard by numerous residents of Taos, New Mexico, since the early 1990s. Despite investigations, its source and cause have not been definitively identified.",

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
const countAPIEndpoint = 'https://api.countapi.xyz/update/jayermi.com/visit-count/?amount=1';
//Function to update the count
function updateCount() {
    fetch(countAPIEndpoint)
        .then(response => response.json())
        .then(data => {
            document.getElementById('visit-count').textContent = data.value;
        })
       .catch(error => {
            console.log('Error updating count:', error);
       });
}
// Call the updateCount function to fetch and display the count on page load
updateCount();


//startGame();
document.addEventListener("DOMContentLoaded", function () {
    var lastUpdatedElement = document.getElementById("last-updated");
    var lastUpdatedDate = new Date(document.lastModified).toLocaleDateString();
    lastUpdatedElement.textContent = "Last Updated: " + lastUpdatedDate;
});
