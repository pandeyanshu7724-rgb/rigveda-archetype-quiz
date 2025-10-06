document.addEventListener("DOMContentLoaded", function () {
  const quizData = [
    {
      question: "When faced with a difficult life decision, your first instinct is to...",
      options: [
        { text: "Step back and seek a deeper meaning behind the situation.", archetype: "Seer" },
        { text: "Take immediate action and handle whatever comes next.", archetype: "Warrior" },
        { text: "Ask how this will affect the people you care about.", archetype: "Nurturer" },
        { text: "Reflect through writing, music, or art to find clarity.", archetype: "Mystic" },
      ]
    },
    {
      question: "What motivates you to keep going during hard times?",
      options: [
        { text: "A burning desire to bring change and challenge the old ways.", archetype: "Rebel" },
        { text: "A commitment to serve a purpose higher than yourself.", archetype: "Devotee" },
        { text: "A strong sense of fairness and the need to restore balance.", archetype: "Harmonizer" },
        { text: "The urge to build or create something lasting.", archetype: "Builder" },
      ]
    },
    {
      question: "Which environment brings out your best self?",
      options: [
        { text: "A calm, sacred space where I can explore spiritual or philosophical questions.", archetype: "Seer" },
        { text: "A fast-paced, high-stakes setting where decisions must be made quickly.", archetype: "Warrior" },
        { text: "A collaborative group working toward justice or societal balance.", archetype: "Harmonizer" },
        { text: "A space for rituals, discipline, or self-purification.", archetype: "Devotee" },
      ]
    },
    {
      question: "When others come to you for help, what do they usually seek?",
      options: [
        { text: "Comfort, safety, and emotional understanding.", archetype: "Nurturer" },
        { text: "Creative inspiration, artistic ideas, or intuitive insights.", archetype: "Mystic" },
        { text: "Motivation to break free and take bold steps.", archetype: "Rebel" },
        { text: "Practical advice on how to build or create something lasting.", archetype: "Builder" },
      ]
    },
    {
      question: "Which compliment would mean the most to you?",
      options: [
        { text: "You always know the deeper meaning behind things.", archetype: "Seer" },
        { text: "You get things done — no matter the challenge.", archetype: "Warrior" },
        { text: "You always know how to make others feel safe and loved.", archetype: "Nurturer" },
        { text: "Your creativity and intuition blow me away.", archetype: "Mystic" },
      ]
    },
    {
      question: "Which role feels most natural to you in a group project?",
      options: [
        { text: "The one who questions old assumptions and pushes new ideas.", archetype: "Rebel" },
        { text: "The one who maintains fairness and emotional balance.", archetype: "Harmonizer" },
        { text: "The one who brings focus, discipline, and keeps everyone on track.", archetype: "Devotee" },
        { text: "The one who creates the structure and builds the actual outcome.", archetype: "Builder" },
      ]
    },
    {
      question: "What brings you the deepest sense of fulfillment?",
      options: [
        { text: "Discovering spiritual or philosophical truths.", archetype: "Seer" },
        { text: "Winning a hard-fought challenge or defending others.", archetype: "Warrior" },
        { text: "Being there for someone in their darkest hour.", archetype: "Nurturer" },
        { text: "Creating beauty or expressing something meaningful.", archetype: "Mystic" },
      ]
    },
    {
      question: "In a moment of crisis, what instinctively takes over?",
      options: [
        { text: "A sudden urge to break the pattern and create a new path.", archetype: "Rebel" },
        { text: "A calm voice inside that seeks justice and restores order.", archetype: "Harmonizer" },
        { text: "A fire of purpose — you double down on your discipline.", archetype: "Devotee" },
        { text: "A practical mind that starts fixing, organizing, or building.", archetype: "Builder" },
      ]
    },
    {
      question: "Which of these is most important to leave behind?",
      options: [
        { text: "A lineage of wisdom, ideas, or spiritual insight.", archetype: "Seer" },
        { text: "A legacy of protection, bravery, or standing up for others.", archetype: "Warrior" },
        { text: "Generations of people who felt safe, loved, and cared for.", archetype: "Nurturer" },
        { text: "Creative works, art, or inspiration that outlives you.", archetype: "Mystic" },
      ]
    },
    {
      question: "If life gave you a second chance, how would you choose to live it?",
      options: [
        { text: "Boldly, questioning norms, forging new beginnings.", archetype: "Rebel" },
        { text: "Silently, working to restore balance and truth.", archetype: "Harmonizer" },
        { text: "Devotedly, offering everything to a higher goal.", archetype: "Devotee" },
        { text: "Productively, crafting useful systems, tools, or shelters.", archetype: "Builder" },
      ]
    },
  ];

  const quizContainer = document.getElementById("quiz");
  const resultContainer = document.getElementById("result");

  quizData.forEach((item, index) => {
    const questionDiv = document.createElement("div");
    questionDiv.classList.add("question-block");

    const questionEl = document.createElement("h3");
    questionEl.innerText = `Q${index + 1}. ${item.question}`;
    questionDiv.appendChild(questionEl);

    item.options.forEach((option, optIndex) => {
      const label = document.createElement("label");
      const input = document.createElement("input");
      input.type = "radio";
      input.name = `q${index}`;
      input.value = option.archetype;

      label.appendChild(input);
      label.append(` ${option.text}`);
      questionDiv.appendChild(label);
      questionDiv.appendChild(document.createElement("br"));
    });

    quizContainer.appendChild(questionDiv);
  });

  document.getElementById("submit").addEventListener("click", () => {
    const scores = {};

    quizData.forEach((_, index) => {
      const selected = document.querySelector(`input[name=q${index}]:checked`);
      if (selected) {
        const archetype = selected.value;
        scores[archetype] = (scores[archetype] || 0) + 1;
      }
    });

    const topArchetype = Object.entries(scores).sort((a, b) => b[1] - a[1])[0]?.[0];

    resultContainer.innerText = topArchetype
      ? `You are most like: ${topArchetype}`
      : "Please answer all questions.";
  });
});
