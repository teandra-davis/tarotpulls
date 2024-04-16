const tarotCards = [
    {
        name: "The Fool",
        img: "https://example.com/path/to/fool.jpg",  // Replace with actual URLs
        description: "Beginnings, innocence, spontaneity, a free spirit"
    },
    {
        name: "The Magician",
        img: "https://example.com/path/to/magician.jpg",
        description: "Power, skill, concentration, action, resourcefulness"
    },
    // Add all tarot cards here
];

function drawCard() {
    const card = tarotCards[Math.floor(Math.random() * tarotCards.length)];
    document.getElementById('tarotImage').src = card.img;
    document.getElementById('cardDescription').textContent = card.name + ": " + card.description;
}
