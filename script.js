const tarotCards = [
    { name: "The Fool", img: "https://i.pinimg.com/564x/02/f1/bc/02f1bcf14eb0a922745955b843cf6cd9.jpg", description: "Beginnings, innocence, spontaneity, a free spirit" },
    { name: "The Magician", img: "https://example.com/path/to/magician.jpg", description: "Power, skill, concentration, action, resourcefulness" },
    { name: "The High Priestess", img: "https://example.com/path/to/high_priestess.jpg", description: "Intuition, higher powers, mystery, subconscious mind" },
    { name: "The Empress", img: "https://example.com/path/to/empress.jpg", description: "Fertility, femininity, beauty, nature, abundance" },
    { name: "The Emperor", img: "https://example.com/path/to/emperor.jpg", description: "Authority, father-figure, structure, solid foundation" },
    { name: "The Hierophant", img: "https://example.com/path/to/hierophant.jpg", description: "Spiritual wisdom, religious beliefs, conformity, tradition, institutions" },
    { name: "The Lovers", img: "https://example.com/path/to/lovers.jpg", description: "Love, harmony, relationships, values alignment, choices" },
    { name: "The Chariot", img: "https://example.com/path/to/chariot.jpg", description: "Control, will power, victory, assertion, determination" },
    { name: "Strength", img: "https://example.com/path/to/strength.jpg", description: "Strength, courage, patience, control, compassion" },
    { name: "The Hermit", img: "https://example.com/path/to/hermit.jpg", description: "Soul-searching, introspection, being alone, inner guidance" },
    { name: "Wheel of Fortune", img: "https://example.com/path/to/wheel_of_fortune.jpg", description: "Good luck, karma, life cycles, destiny, a turning point" },
    { name: "Justice", img: "https://example.com/path/to/justice.jpg", description: "Justice, fairness, truth, cause and effect, law" },
    { name: "The Hanged Man", img: "https://example.com/path/to/hanged_man.jpg", description: "Suspension, restriction, letting go, sacrifice" },
    { name: "Death", img: "https://example.com/path/to/death.jpg", description: "Endings, beginnings, change, transformation, transition" },
    { name: "Temperance", img: "https://example.com/path/to/temperance.jpg", description: "Balance, moderation, patience, purpose, meaning" },
    { name: "The Devil", img: "https://example.com/path/to/devil.jpg", description: "Bondage, addiction, sexuality, materialism" },
    { name: "The Tower", img: "https://example.com/path/to/tower.jpg", description: "Disaster, upheaval, sudden change, revelation" },
    { name: "The Star", img: "https://example.com/path/to/star.jpg", description: "Hope, spirituality, renewal, inspiration, serenity" },
    { name: "The Moon", img: "https://example.com/path/to/moon.jpg", description: "Illusion, fear, anxiety, subconscious, intuition" },
    { name: "The Sun", img: "https://example.com/path/to/sun.jpg", description: "Fun, warmth, success, positivity, vitality" },
    { name: "Judgement", img: "https://example.com/path/to/judgement.jpg", description: "Judgement, rebirth, inner calling, absolution" },
    { name: "The World", img: "https://example.com/path/to/world.jpg", description: "Completion, integration, accomplishment, travel" }
];


function drawCard() {
    const card = tarotCards[Math.floor(Math.random() * tarotCards.length)];
    document.getElementById('tarotImage').src = card.img;
    document.getElementById('cardDescription').textContent = card.name + ": " + card.description;
}
