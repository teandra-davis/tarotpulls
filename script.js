const tarotCards = [

    //MajoR Arcana
    { name: "The Fool", img: "https://i.pinimg.com/474x/fc/6d/e9/fc6de9100332c80a5a073ba7817c4a48.jpg", description: "Beginnings, innocence, spontaneity, a free spirit" },
    { name: "The Magician", img: "https://i.pinimg.com/474x/12/00/15/1200153d69f11c88018e3e3d4ee6fa1b.jpg", description: "Power, skill, concentration, action, resourcefulness" },
    { name: "The High Priestess", img: "https://i.pinimg.com/474x/a5/a0/34/a5a0349d0e8881f98b2fe5c34e687afa.jpg", description: "Intuition, higher powers, mystery, subconscious mind" },
    { name: "The Empress", img: "https://i.pinimg.com/474x/98/54/24/9854240f652ab0c8a35d06d3f7824104.jpg", description: "Fertility, femininity, beauty, nature, abundance" },
    { name: "The Emperor", img: "https://i.pinimg.com/474x/3d/be/c5/3dbec5d9f94ce519549be4afa7892e91.jpg", description: "Authority, father-figure, structure, solid foundation" },
    { name: "The Hierophant", img: "https://i.pinimg.com/474x/d9/89/92/d98992949089ed7e8bc6fc408c8f292a.jpg", description: "Spiritual wisdom, religious beliefs, conformity, tradition, institutions" },
    { name: "The Lovers", img: "https://i.pinimg.com/474x/9c/4f/ac/9c4face1d3a32c1b2adbc20ca0601b15.jpg", description: "Love, harmony, relationships, values alignment, choices" },
    { name: "The Chariot", img: "https://i.pinimg.com/474x/5b/2a/8b/5b2a8b716f7b7f0ce0e2399b7cf48938.jpg", description: "Control, will power, victory, assertion, determination" },
    { name: "Strength", img: "https://i.pinimg.com/474x/78/44/43/784443f04d64f07ba86ffa0acc44b283.jpg", description: "Strength, courage, patience, control, compassion" },
    { name: "The Hermit", img: "https://e1.pxfuel.com/desktop-wallpaper/413/208/desktop-wallpaper-the-hermit.jpg", description: "Soul-searching, introspection, being alone, inner guidance" },
    { name: "Wheel of Fortune", img: "https://i.pinimg.com/474x/80/7c/d0/807cd0cc82ca824a81a7322e5c92d8ac.jpg", description: "Good luck, karma, life cycles, destiny, a turning point" },
    { name: "Justice", img: "https://i.pinimg.com/474x/af/d7/e4/afd7e42c1a1022e4a44965e9ced5de9f.jpg", description: "Justice, fairness, truth, cause and effect, law" },
    { name: "The Hanged Man", img: "https://i.pinimg.com/474x/22/ce/cf/22cecfc0c951aabd78543015846e2bf0.jpg", description: "Suspension, restriction, letting go, sacrifice" },
    { name: "Death", img: "https://i.pinimg.com/474x/d3/7b/0c/d37b0cc46c5dff205dc99999e338762f.jpg", description: "Endings, beginnings, change, transformation, transition" },
    { name: "Temperance", img: "https://i.pinimg.com/474x/5a/97/85/5a9785a7d37e021ca7e2b9c0fef5f4f0.jpg", description: "Balance, moderation, patience, purpose, meaning" },
    { name: "The Devil", img: "https://i.pinimg.com/474x/bd/a8/42/bda842c084cbeb342f3dadbe5f501b80.jpg", description: "Bondage, addiction, sexuality, materialism" },
    { name: "The Tower", img: "https://i.pinimg.com/474x/1f/14/e0/1f14e08df1fc08e32628536ec475c355.jpg", description: "Disaster, upheaval, sudden change, revelation" },
    { name: "The Star", img: "https://i.pinimg.com/474x/28/f6/6c/28f66c76b8bcd5b8fede09eea7275ab3.jpg", description: "Hope, spirituality, renewal, inspiration, serenity" },
    { name: "The Moon", img: "https://i.pinimg.com/474x/2a/1a/2a/2a1a2abaf508b43e50ad7a56e77888c7.jpg", description: "Illusion, fear, anxiety, subconscious, intuition" },
    { name: "The Sun", img: "https://i.pinimg.com/474x/41/67/25/41672575b9ec3d10d0b8eb6ae6e2af85.jpg", description: "Fun, warmth, success, positivity, vitality" },
    { name: "Judgement", img: "https://i.pinimg.com/474x/a6/64/09/a6640930fe724719fbd6a385d36c39da.jpg", description: "Judgement, rebirth, inner calling, absolution" },
    { name: "The World", img: "https://i.pinimg.com/474x/69/ac/59/69ac59248a171f7b6047858deaff7e46.jpg", description: "Completion, integration, accomplishment, travel" },

    //Cups
    { name: "Ace of Cups", img: "https://i.pinimg.com/474x/f9/0d/a2/f90da218f72679ab9b7c3568b25b6f18.jpg", description: "Love, new relationships, compassion, creativity" },
    { name: "Two of Cups", img: "https://i.pinimg.com/474x/9a/3c/74/9a3c74d73a1c73d90269f92084d8c700.jpg", description: "Partnership, unity, love, attraction" },
    { name: "Three of Cups", img: "https://i.pinimg.com/474x/69/67/bc/6967bc45ce90bc4b8bfafb1e0a81966a.jpg", description: "Celebration, friendship, creativity, collaborations" },
    { name: "Four of Cups", img: "https://i.pinimg.com/474x/e8/4a/0f/e84a0f6415183365d9b08161e0ec0443.jpg", description: "Meditation, contemplation, apathy, reevaluation" },
    { name: "Five of Cups", img: "https://i.pinimg.com/474x/d1/c3/2c/d1c32c5cab6501bd5140bee0b85f1d1e.jpg", description: "Loss, regret, disappointment, despair, bereavement" },
    { name: "Six of Cups", img: "https://i.pinimg.com/474x/f7/c0/3c/f7c03c84f261ae6c968664673edb70f7.jpg", description: "Nostalgia, childhood memories, innocence, joy" },
    { name: "Seven of Cups", img: "https://i.pinimg.com/474x/d1/30/3b/d1303baa6f7fa93700148076027a215f.jpg", description: "Choices, confusion, illusions, fantasy" },
    { name: "Eight of Cups", img: "https://i.pinimg.com/474x/f8/a8/d0/f8a8d02de00c4ced9913a5c745b98e50.jpg", description: "Disillusionment, abandonment, withdrawal, flight" },
    { name: "Nine of Cups", img: "https://i.pinimg.com/474x/ac/56/2f/ac562f4d335734a7cf42fe1ae568973d.jpg", description: "Satisfaction, emotional stability, luxury, well-being" },
    { name: "Ten of Cups", img: "https://i.pinimg.com/474x/5d/96/f2/5d96f2a325f72a5585f337ef8aebf452.jpg", description: "Harmony, marriage, happiness, alignment" },
    { name: "Page of Cups", img: "https://i.pinimg.com/474x/43/62/b2/4362b219542073dd9a1d17a659a9ef40.jpg", description: "A messenger, creative beginnings, synchronicity" },
    { name: "Knight of Cups", img: "https://i.pinimg.com/474x/6a/ee/73/6aee731189e4430ad5e6cf155bc73dea.jpg", description: "Romance, adventure, following the heart" },
    { name: "Queen of Cups", img: "https://i.pinimg.com/474x/24/2b/17/242b17d7c2fec0e4c392d3d0a0d5eedc.jpg", description: "Compassion, calm, comfort, a caring nature" },
    { name: "King of Cups", img: "https://i.pinimg.com/474x/4a/00/05/4a0005103b5711362495d27a63a48f90.jpg", description: "Emotional balance and control, generosity" },

    // Pentacles
    { name: "Ace of Pentacles", img: "https://i.pinimg.com/474x/15/a3/0d/15a30dadef85d62e0e70bf3006b033c1.jpg", description: "A new financial or career opportunity, prosperity, abundance" },
    { name: "Two of Pentacles", img: "https://i.pinimg.com/474x/ab/3a/65/ab3a65c6b8d61844d88316f9d6fc3fc1.jpg", description: "Balance, multitasking, time management" },
    { name: "Three of Pentacles", img: "https://example.com/path/to/three_of_pentacles.jpg", description: "Collaboration, learning, implementation" },
    { name: "Four of Pentacles", img: "https://i.pinimg.com/474x/de/d6/5e/ded65e5de3afbea7549329b5e30003fb.jpg", description: "Security, possession, control, blockage" },
    { name: "Five of Pentacles", img: "https://i.pinimg.com/474x/96/5c/de/965cdeedc2774e255dbe457dc4270723.jpg", description: "Need, poverty, insecurity, worry" },
    { name: "Six of Pentacles", img: "https://i.pinimg.com/474x/95/be/dc/95bedcf05f7f8df2b1681bc75aacd7f4.jpg", description: "Charity, generosity, sharing, prosperity" },
    { name: "Seven of Pentacles", img: "https://i.pinimg.com/474x/22/1e/4d/221e4ded3097de7a433fcca4c330a1fb.jpg", description: "Patience, long-term success, investment, reward" },
    { name: "Eight of Pentacles", img: "https://i.pinimg.com/474x/c1/04/66/c1046669aa64b7a589c77a572c946adb.jpg", description: "Apprenticeship, education, quality, engagement" },
    { name: "Nine of Pentacles", img: "https://i.pinimg.com/474x/3c/a5/fe/3ca5feefd8b569d85949c70ad4bda1d2.jpg", description: "Luxury, self-sufficiency, culminated effort" },
    { name: "Ten of Pentacles", img: "https://i.pinimg.com/474x/4f/ab/66/4fab66a8417544df675efd6969e91086.jpg", description: "Wealth, inheritance, family, establishment" },
    { name: "Page of Pentacles", img: "https://i.pinimg.com/474x/33/3f/f9/333ff9c355a85bdb967b1d390f20c77b.jpg", description: "Ambition, desire, diligence, new beginnings" },
    { name: "Knight of Pentacles", img: "https://i.pinimg.com/474x/02/aa/e0/02aae06209bbff8346792a3824bb3762.jpg", description: "Efficiency, routine, conservatism, methodical" },
    { name: "Queen of Pentacles", img: "https://i.pinimg.com/474x/28/6e/77/286e7792d2a14867c07fd673f5068c74.jpg", description: "Practicality, creature comforts, financial security" },
    { name: "King of Pentacles", img: "https://i.pinimg.com/474x/a5/bb/36/a5bb36b6d8a2344c11e6f5b32ed7cf29.jpg", description: "Abundance, prosperity, security, ambition" },

    // Swords
    { name: "Ace of Swords", img: "https://i.pinimg.com/474x/54/6f/b1/546fb1ad2115fa479e44294577f3ad9b.jpg", description: "New ideas, mental clarity, breakthroughs, determination" },
    { name: "Two of Swords", img: "https://i.pinimg.com/474x/90/86/b5/9086b5e074fae3a88135ded1fac3d2a5.jpg", description: "Difficult choices, indecision, stalemate, blocked emotions" },
    { name: "Three of Swords", img: "https://i.pinimg.com/474x/a3/f0/97/a3f0978b08dcc917fa75d7ae335fb827.jpg", description: "Heartbreak, emotional pain, sorrow, grief, separation" },
    { name: "Four of Swords", img: "https://i.pinimg.com/474x/0c/68/1e/0c681e5fa1229ac0eb5f81b6dcb22119.jpg", description: "Rest, relaxation, meditation, contemplation" },
    { name: "Five of Swords", img: "https://i.pinimg.com/474x/18/0c/57/180c57788b5c7dd39bf88960814149c7.jpg", description: "Conflict, tension, loss, defeat, win at all costs" },
    { name: "Six of Swords", img: "https://i.pinimg.com/474x/0b/fa/7c/0bfa7cc1cf8ff0fbf47ba5dd7b67152d.jpg", description: "Transition, change, rite of passage, releasing baggage" },
    { name: "Seven of Swords", img: "https://i.pinimg.com/474x/34/d1/ec/34d1ec505375631bb59c49b6c3595d1d.jpg", description: "Betrayal, deception, getting away with something, stealth" },
    { name: "Eight of Swords", img: "https://i.pinimg.com/474x/bc/96/ad/bc96adec950a4d9b95170fbde5388123.jpg", description: "Restriction, confusion, powerlessness, self-imposed limitations" },
    { name: "Nine of Swords", img: "https://i.pinimg.com/474x/28/96/c0/2896c017739e7dee60ec25dab25277ba.jpg", description: "Anxiety, worry, fear, depression, nightmares" },
    { name: "Ten of Swords", img: "https://i.pinimg.com/474x/d1/12/2c/d1122cc6e58ea12306aaa2cb5884ea3b.jpg", description: "Completion, end of a cycle, betrayal, backstabbed" },
    { name: "Page of Swords", img: "https://i.pinimg.com/474x/cd/c1/c4/cdc1c42cc4663c42a204142ddb548150.jpg", description: "Curiosity, restless energy, inquisitive, meddlesome" },
    { name: "Knight of Swords", img: "https://i.pinimg.com/474x/f2/cc/3c/f2cc3cdc0ec9466db3cf8cd9ec38d690.jpg", description: "Action, impulsiveness, defending beliefs, strong-willed" },
    { name: "Queen of Swords", img: "https://i.pinimg.com/474x/cd/80/13/cd8013aa1ab28c4b0f5c377a7082b4e0.jpg", description: "Complexity, perceptiveness, clear mindedness, direct" },
    { name: "King of Swords", img: "https://i.pinimg.com/474x/6b/49/10/6b491073b4bdfc7bc719d45e2bf97837.jpg", description: "Intellectual power, authority, truth, analytical" },

    // Wands
    { name: "Ace of Wands", img: "https://i.pinimg.com/474x/61/fc/0b/61fc0b8e21c2a97087306cd3753c5327.jpg", description: "Inspiration, new opportunities, growth, potential" },
    { name: "Two of Wands", img: "https://i.pinimg.com/474x/e7/9f/72/e79f722c903d268637239bfa23713b67.jpg", description: "Future planning, progress, decisions, discovery" },
    { name: "Three of Wands", img: "https://i.pinimg.com/474x/f6/23/5f/f6235f1497f8b7d0616bbf3f32f755e3.jpg", description: "Preparation, foresight, enterprise, expansion" },
    { name: "Four of Wands", img: "https://i.pinimg.com/474x/c8/8b/f5/c88bf53a864e2fc02baa0a1fdec83d7b.jpg", description: "Celebration, joy, harmony, relaxation, homecoming" },
    { name: "Five of Wands", img: "https://i.pinimg.com/474x/04/0b/41/040b41ae4a0535698da50685781626fb.jpg", description: "Competition, rivalry, conflict, tension, diversity" },
    { name: "Six of Wands", img: "https://i.pinimg.com/474x/a7/77/5a/a7775a4946b100ec1f8bfe49d6f80a18.jpg", description: "Success, accolades, achievement, honor, recognition" },
    { name: "Seven of Wands", img: "https://i.pinimg.com/474x/04/90/c1/0490c1354fa08e6591a0118979d79489.jpg", description: "Challenge, perseverance, defensive, maintaining control" },
    { name: "Eight of Wands", img: "https://i.pinimg.com/474x/b8/c1/70/b8c170fb9eb5819c06847fec161c9efd.jpg", description: "Speed, action, air travel, movement, swift change" },
    { name: "Nine of Wands", img: "https://i.pinimg.com/474x/1f/e2/3c/1fe23cae53d60537d460f14ed25fab23.jpg", description: "Resilience, courage, persistence, test of faith, close to completion" },
    { name: "Ten of Wands", img: "https://i.pinimg.com/474x/67/b4/a3/67b4a3f6e2fdaba5b23bb0c40e64ef1d.jpg", description: "Burden, extra responsibility, hard work, completion" },
    { name: "Page of Wands", img: "https://i.pinimg.com/474x/dc/cc/14/dccc14faa075e1966eab51e43437e51d.jpg", description: "Enthusiasm, exploration, discovery, free spirit" },
    { name: "Knight of Wands", img: "https://i.pinimg.com/474x/2b/3d/12/2b3d12cd8e1a7a9c98ff70882841e920.jpg", description: "Energy, passion, inspired action, adventure, impulsiveness" },
    { name: "Queen of Wands", img: "https://i.pinimg.com/474x/e5/30/7a/e5307af437a1ddc3cf24bccfe7b9b122.jpg", description: "Confidence, social butterfly, determination, joy" },
    { name: "King of Wands", img: "https://i.pinimg.com/474x/6b/49/10/6b491073b4bdfc7bc719d45e2bf97837.jpg", description: "Natural-born leader, vision, entrepreneur, honor" }
];


function drawCard() {
    const card = tarotCards[Math.floor(Math.random() * tarotCards.length)];
    document.getElementById('tarotImage').src = card.img;
    document.getElementById('cardTitle').textContent = card.name;
    document.getElementById('cardDescription').textContent = card.description;
}
