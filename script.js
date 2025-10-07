const archetypes = {
  seer: {
    name: "Rishi Vamadeva",
    title: "The Seer – The Insightful Witness of Truth",
    description:
      "You are driven by reflection, stillness, and the deeper questions of life. Like Rishi Vamadeva, you observe before acting, and wisdom flows through your inner silence. Your strength lies in clarity of thought and connection to the eternal.",
    mantra: "“I was Manu, I was the Sun” — Rigveda 4.26.1",
    message:
      "Your path is one of insight. Trust your inner voice — it sees beyond time."
  },
  warrior: {
    name: "Indra",
    title: "The Warrior – The Thunder-Wielder of Change",
    description:
      "You are bold, action-oriented, and unafraid to confront what stands in your way. Like Indra, who split the clouds to release rain, you fight for progress, protect your people, and challenge stagnation.",
    mantra:
      "Rigveda 1.9.6: “Inspire us, O Indra, to attain zeal and energy, splendour and wealth, and glory and fame.”",
    message: "You are a storm with purpose. Lead the charge, but with wisdom."
  },
  nurturer: {
    name: "Aditi",
    title: "The Nurturer – The Infinite Mother of Boundless Space",
    description:
      "You carry warmth, strength, and a quiet resilience. Like Aditi, the primal mother, you hold space for others to grow, heal, and belong. You are deeply intuitive, emotionally wise, and value harmony in relationships.",
    mantra:
      "Rigveda 1.89.10: “Aditi is heaven; Aditi is the firmament; Aditi is mother, father and son; Aditi is all the gods; Aditi is all the classes of people.”",
    message:
      "Your presence is your power. Don’t underestimate the quiet revolutions you bring through care."
  },
  mystic: {
    name: "Sarasvati",
    title: "The Mystic – The River of Creative Revelation",
    description:
      "You are poetic, visionary, and drawn to beauty beyond the senses. Like Sarasvati, the divine river of insight, you channel knowledge, art, and rhythm into everything you do. Ideas find you — not the other way around.",
    mantra:
      "Rigveda 1.3.10: “May Sarasvati, the inspirer of noble thoughts, be pleased with us.”",
    message:
      "Flow with your creative currents. Your path is nonlinear, but deeply meaningful."
  },
  rebel: {
    name: "Ushas",
    title: "The Rebel – The Dawning Light of New Beginnings",
    description:
      "You are bold, radiant, and unafraid to break patterns. Like Ushas, the dawn goddess, you usher in change — even when it’s uncomfortable. You challenge norms, awaken others, and bring freshness wherever you go.",
    mantra:
      "Rigveda 1.48.1: “She shines with the light of truth, awakening all beings to action.”",
    message:
      "Trust your inner sunrise. You are here to disrupt and renew — let that light rise."
  },
  devotee: {
    name: "Agni",
    title: "The Devotee – The Sacred Flame of Discipline and Devotion",
    description:
      "You are focused, inwardly strong, and driven by purpose. Like Agni, the fire priest, you burn with clarity and commitment — to ideals, goals, or a higher calling. You thrive in routine, ritual, and self-transformation.",
    mantra:
      "Rigveda 1.1.1: “I glorify Agni, the high priest of the sacrifice, who presents the oblation and possesses great wealth.”",
    message:
      "Your fire purifies. Stay dedicated to your path — you’re lighting the way."
  },
  harmonizer: {
    name: "Varuna",
    title: "The Harmonizer – The Keeper of Cosmic Order",
    description:
      "You value justice, balance, and quiet authority. Like Varuna, the upholder of ṛta (cosmic order), you sense what’s right and act to restore it. You see the bigger picture and often carry unspoken wisdom — guiding others not by noise, but by clarity.",
    mantra:
      "Rigveda 5.85.5: “I proclaim this great device of the renowned Varuna, the destroyer of the Asuras, who has meted the firmament by the sun.”",
    message:
      "Your strength is in restoring equilibrium. Trust your sense of truth — it’s ancient."
  },
  builder: {
    name: "Tvastar",
    title: "The Builder – The Artisan of Possibility",
    description:
      "You are inventive, resourceful, and grounded in doing. Like Tvastar, the celestial craftsman, you build the future — one idea, tool, or structure at a time. You blend creativity with precision, vision with execution.",
    mantra:
      "Rigveda 10.110.9: “To the divine Tvasti, who decked the parental heaven and earth and all the worlds with living forms.”",
    message:
      "Creation flows through your hands. Make what only you can — the world needs it."
  }
};

// --- Initialize scores ---
let scores = {
  seer: 0,
  warrior: 0,
  nurturer: 0,
  mystic: 0,
  rebel: 0,
  devotee: 0,
  harmonizer: 0,
  builder: 0
};

// --- Quiz Logic ---
function submitQuiz() {
  // Reset scores
  for (let key in scores) scores[key] = 0;

  const questions = document.querySelectorAll(".question");
  let allAnswered = true;

  questions.forEach((q, i) => {
    const selected = q.querySelector("input[type='radio']:checked");
    if (selected) {
      scores[selected.value]++;
    } else {
      allAnswered = false;
    }
  });

  if (!allAnswered) {
    alert("Please answer all questions before submitting.");
    return;
  }

  // Determine highest scoring archetype
  let highest = 0;
  let resultKey = "";
  for (const key in scores) {
    if (scores[key] > highest) {
      highest = scores[key];
      resultKey = key;
    }
  }

  displayResult(resultKey);
}

// --- Display Result ---
function displayResult(key) {
  const resultDiv = document.getElementById("result");
  const a = archetypes[key];
  resultDiv.innerHTML = `
    <div class="result-box">
      <h2>${a.title}</h2>
      <h3>${a.name}</h3>
      <p>${a.description}</p>
      <blockquote>${a.mantra}</blockquote>
      <p><strong>Message:</strong> ${a.message}</p>
    </div>
  `;
  resultDiv.scrollIntoView({ behavior: "smooth" });
}

// --- Optional: Reset Quiz ---
function resetQuiz() {
  document.querySelectorAll("input[type='radio']").forEach((r) => (r.checked = false));
  document.getElementById("result").innerHTML = "";
  for (let key in scores) scores[key] = 0;
}
