const tarotCards = [
    { name: "The Fool", img: "https://i.pinimg.com/474x/8a/f9/e3/8af9e3d2838b799d86e1909bfd084fc4.jpg", description: "Beginnings, innocence, spontaneity, a free spirit" },
    { name: "The Magician", img: "https://i.pinimg.com/564x/aa/96/fc/aa96fcb40714259f8c4f8a8e1c6e0b0e.jpg", description: "Power, skill, concentration, action, resourcefulness" },
    { name: "The High Priestess", img: "https://i.pinimg.com/564x/fc/68/6c/fc686c35c4c18b64a5d36be2216f2d7c.jpg", description: "Intuition, higher powers, mystery, subconscious mind" },
    { name: "The Empress", img: "https://i.pinimg.com/564x/d4/2a/8c/d42a8cde4da35c8c532d39ed64f7db2b.jpg", description: "Fertility, femininity, beauty, nature, abundance" },
    { name: "The Emperor", img: "https://i.pinimg.com/564x/0d/cf/3f/0dcf3f031c542538dc59725470663a8f.jpg", description: "Authority, father-figure, structure, solid foundation" },
    { name: "The Hierophant", img: "https://www.pinterest.com/pin/437060338849306191/", description: "Spiritual wisdom, religious beliefs, conformity, tradition, institutions" },
    { name: "The Lovers", img: "https://i.pinimg.com/474x/b1/3c/52/b13c52002d48c273af9be5fb8b41b7ff.jpg", description: "Love, harmony, relationships, values alignment, choices" },
    { name: "The Chariot", img: "https://i.pinimg.com/474x/50/c7/ec/50c7ecac2d8e4310a705035af3ae2558.jpg", description: "Control, will power, victory, assertion, determination" },
    { name: "Strength", img: "https://i.pinimg.com/564x/b4/57/a6/b457a6af8b04d55ced0ad7d03a9cd61c.jpg", description: "Strength, courage, patience, control, compassion" },
    { name: "The Hermit", img: "https://i.pinimg.com/474x/72/61/f6/7261f66e12ca709fe461d1cdebccf459.jpg", description: "Soul-searching, introspection, being alone, inner guidance" },
    { name: "Wheel of Fortune", img: "https://i.pinimg.com/474x/af/d7/e4/afd7e42c1a1022e4a44965e9ced5de9f.jpg", description: "Good luck, karma, life cycles, destiny, a turning point" },
    { name: "Justice", img: "https://i.pinimg.com/474x/af/d7/e4/afd7e42c1a1022e4a44965e9ced5de9f.jpg", description: "Justice, fairness, truth, cause and effect, law" },
    { name: "The Hanged Man", img: "https://i.pinimg.com/474x/0d/ae/08/0dae08c2c740e5e6d660942384614e90.jpg", description: "Suspension, restriction, letting go, sacrifice" },
    { name: "Death", img: "https://i.pinimg.com/474x/c1/10/8d/c1108d55b870cc1d0ba5e8686fe2fc9e.jpg", description: "Endings, beginnings, change, transformation, transition" },
    { name: "Temperance", img: "https://i.pinimg.com/564x/b9/35/93/b93593158c98a811ec1915cb15d52812.jpg", description: "Balance, moderation, patience, purpose, meaning" },
    { name: "The Devil", img: "https://i.pinimg.com/474x/bd/a8/42/bda842c084cbeb342f3dadbe5f501b80.jpg", description: "Bondage, addiction, sexuality, materialism" },
    { name: "The Tower", img: "https://i.pinimg.com/474x/fb/f8/e3/fbf8e39812e69f97f49f3932363268c9.jpg", description: "Disaster, upheaval, sudden change, revelation" },
    { name: "The Star", img: "https://i.pinimg.com/474x/07/ad/38/07ad38017fbed9e8b1b450bdb055a5e5.jpg", description: "Hope, spirituality, renewal, inspiration, serenity" },
    { name: "The Moon", img: "https://i.pinimg.com/564x/fb/1f/10/fb1f100b062ab017ff7f888355ae4046.jpg", description: "Illusion, fear, anxiety, subconscious, intuition" },
    { name: "The Sun", img: "https://i.pinimg.com/474x/b6/53/0d/b6530df085d968e28b4e68def105fb45.jpg", description: "Fun, warmth, success, positivity, vitality" },
    { name: "Judgement", img: "https://i.pinimg.com/474x/fe/87/10/fe871075a7f1888e57af5fb720d3bb46.jpg", description: "Judgement, rebirth, inner calling, absolution" },
    { name: "The World", img: "https://i.pinimg.com/474x/7c/ee/be/7ceebe7c8304a96c84108d71ca4ca92a.jpg", description: "Completion, integration, accomplishment, travel" }
];


function drawCard() {
    const card = tarotCards[Math.floor(Math.random() * tarotCards.length)];
    document.getElementById('tarotImage').src = card.img;
    document.getElementById('cardDescription').textContent = card.name + ": " + card.description;
}
