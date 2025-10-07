document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('quiz-form');
  const resultDiv = document.getElementById('result');

  const archetypeDetails = {
    "The Seer": {
      title: "The Insightful Witness of Truth",
      description: "You are driven by reflection, stillness, and the deeper questions of life. Like Rishi Vamadeva, you observe before acting, and wisdom flows through your inner silence. Your strength lies in clarity of thought and connection to the eternal.",
      mantra: "“I was Manu, I was the Sun” —Rigveda 4.26.1",
      message: "Your path is one of insight. Trust your inner voice, it sees beyond time."
    },
    "The Warrior": {
      title: "The Thunder-Wielder of Change",
      description: "You are bold, action-oriented, and not afraid to confront what stands in your way. Like Indra who split the clouds to release rain, you fight for progress, protect your people, and challenge stagnation.",
      mantra: 'Rigveda 1.9.6: “Asmaanstu Tatra Codavendra Raaye Rabhassvatah | Tuviyudhma Yashasvatah ||”',
      message: "You are a storm with purpose. Lead the charge, but with wisdom."
    },
    "The Nurturer": {
      title: "The Infinite Mother of Boundless Space",
      description: "You carry warmth, strength, and a quiet resilience. Like Aditi, the primal mother, you hold space for others to grow, heal, and belong. You are deeply intuitive, emotionally wise, and value harmony in relationships.",
      mantra: '“Aditi is heaven; Aditi is the firmament; Aditi is mother, father and son; Aditi is all the gods; Aditi is all the classes of people; Aditi is genitive ration and birth.” — Rigveda 1.89.10',
      message: "Your presence is your power. Don’t underestimate the quiet revolutions you bring through care."
    },
    "The Mystic": {
      title: "The River of Creative Revelation",
      description: "You are poetic, visionary, and drawn to beauty beyond the senses. Like Sarasvati, the divine river of insight, you channel knowledge, art, and rhythm into everything you do. Ideas find you — not the other way around.",
      mantra: '“May Sarasvati, the inspirer of noble thoughts, be pleased with us” —Rigveda 1.3.10',
      message: "Flow with your creative currents. Your path is nonlinear, but deeply meaningful."
    },
    "The Rebel": {
      title: "The Dawning Light of New Beginnings",
      description: "You are bold, radiant, and unafraid to break patterns. Like Ushas, the dawn goddess, you usher in change — even when it’s uncomfortable. You challenge norms, awaken others, and bring freshness wherever you go.",
      mantra: '“She shines with the light of truth, awakening all beings to action.” — Rigveda 1.48.1',
      message: "Trust your inner sunrise. You are here to disrupt and renew — let that light rise."
    },
    "The Devotee": {
      title: "The Sacred Flame of Discipline and Devotion",
      description: "You are focused, inwardly strong, and driven by purpose. Like Agni, the fire priest, you burn with clarity and commitment — to ideals, goals, or a higher calling. You thrive in routine, ritual, and self-transformation.",
      mantra: '“I glorify Agni, the high priest of the sacrifice, the divine, the ministrant, who presents the oblation (to the gods), and is the possessor of great wealth” — Rigveda 1.1.1',
      message: "Your fire purifies. Stay dedicated to your path — you’re lighting the way."
    },
    "The Harmonizer": {
      title: "The Keeper of Cosmic Order",
      description: "You value justice, balance, and quiet authority. Like Varuna, the upholder of ṛta (cosmic order), you sense what’s right and act to restore it. You see the bigger picture and often carry unspoken wisdom — guiding others not by noise, but by clarity.",
      mantra: '“I proclaim this great device of the renowned Varuna, the destroyer of the Asuras, who, abiding in the mid-heaven, has meted the firmament by the sun, as if by a measure.” — Rig Veda 5.85.5',
      message: "Your strength is in restoring equilibrium. Trust your sense of truth — it’s ancient."
    },
    "The Builder": {
      title: "The Artisan of Possibility",
      description: "You are inventive, resourceful, and grounded in doing. Like Tvastar, the celestial craftsman, you build the future — one idea, tool, or structure at a time. You blend creativity with precision, vision with execution.",
      mantra: '“To the divine Tvasṭā, who decked the parental heaven and earth and all the worlds with living forms, to him, O priest, who are venerable and wise, being solicited by us, offer oblation here today.” — Rigveda 10.110.9',
      message: "Creation flows through your hands. Make what only you can — the world needs it."
    }
  };

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const formData = new FormData(form);
    const answers = Array.from(formData.values());

    const scoreMap = {};

    answers.forEach(answer => {
      if (!scoreMap[answer]) {
        scoreMap[answer] = 0;
      }
      scoreMap[answer]++;
    });

    const topArchetype = Object.entries(scoreMap).sort((a, b) => b[1] - a[1])[0][0];
    const profile = archetypeDetails[topArchetype];

    resultDiv.innerHTML = `
      <h2>You are most like: ${topArchetype}</h2>
      <h3>${profile.title}</h3>
      <p><strong>Description:</strong> ${profile.description}</p>
      <p><strong>Mantra:</strong> ${profile.mantra}</p>
      <p><strong>Message:</strong> ${profile.message}</p>
    `;
  });
});
