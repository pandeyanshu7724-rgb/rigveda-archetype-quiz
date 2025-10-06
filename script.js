{\rtf1\ansi\ansicpg1252\cocoartf2865
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx566\tx1133\tx1700\tx2267\tx2834\tx3401\tx3968\tx4535\tx5102\tx5669\tx6236\tx6803\pardirnatural\partightenfactor0

\f0\fs24 \cf0 const questions = [\
  \{\
    question: "How do you usually approach a new challenge?",\
    answers: \{\
      A: "With deep introspection and reflection.",\
      B: "By diving in headfirst, ready to win.",\
      C: "With empathy and awareness of others.",\
      D: "Through creativity and artistic flair."\
    \}\
  \},\
  \{\
    question: "Which environment makes you feel most alive?",\
    answers: \{\
      A: "A quiet place for contemplation.",\
      B: "A battlefield or competitive space.",\
      C: "Around family or loved ones.",\
      D: "A vibrant artistic or musical event."\
    \}\
  \},\
  \{\
    question: "What role do you often play in a group?",\
    answers: \{\
      A: "The wise guide or advisor.",\
      B: "The one who takes charge and acts.",\
      C: "The peacemaker and nurturer.",\
      D: "The creative spark or performer."\
    \}\
  \},\
  \{\
    question: "How do you process emotions?",\
    answers: \{\
      A: "Through journaling, silence or philosophy.",\
      B: "I channel them into action.",\
      C: "I talk to someone or help others.",\
      D: "I express them through art, music or poetry."\
    \}\
  \},\
  \{\
    question: "Which quality do you value most?",\
    answers: \{\
      A: "Wisdom",\
      B: "Courage",\
      C: "Compassion",\
      D: "Imagination"\
    \}\
  \},\
  \{\
    question: "Pick a mantra that resonates:",\
    answers: \{\
      A: "Om Tat Sat \'96 The eternal truth.",\
      B: "Jayatu \'96 Let there be victory!",\
      C: "Sarve Bhavantu Sukhinah \'96 May all be happy.",\
      D: "Satyam Shivam Sundaram \'96 Truth, God, and Beauty."\
    \}\
  \},\
  \{\
    question: "What motivates you most?",\
    answers: \{\
      A: "Understanding deeper truths.",\
      B: "Achieving a mission or goal.",\
      C: "Helping others thrive.",\
      D: "Creating something meaningful."\
    \}\
  \},\
  \{\
    question: "In conflict, you tend to...",\
    answers: \{\
      A: "Step back and reflect calmly.",\
      B: "Confront it directly.",\
      C: "Try to soothe tensions.",\
      D: "Distract, divert, or charm."\
    \}\
  \},\
  \{\
    question: "How do you define success?",\
    answers: \{\
      A: "Inner clarity and purpose.",\
      B: "Victory and recognition.",\
      C: "Strong relationships and service.",\
      D: "Expression of your true self."\
    \}\
  \},\
  \{\
    question: "You believe the world needs more...",\
    answers: \{\
      A: "Knowledge and introspection.",\
      B: "Leadership and bravery.",\
      C: "Kindness and unity.",\
      D: "Beauty and inspiration."\
    \}\
  \}\
];\
\
const scores = \{\
  A: 0, // Seer \'96 Rishi Vamadeva\
  B: 0, // Warrior \'96 Indra\
  C: 0, // Nurturer \'96 Aditi\
  D: 0  // Mystic \'96 Sarasvati\
\};\
\
function selectAnswer(option) \{\
  const current = document.querySelector(".question").dataset.index;\
  const key = Object.keys(scores)[option];\
  scores[key]++;\
  showQuestion(parseInt(current) + 1);\
\}\
\
function showQuestion(index) \{\
  const container = document.getElementById("quiz");\
  if (index >= questions.length) \{\
    return showResult();\
  \}\
\
  const q = questions[index];\
  container.innerHTML = `\
    <div class="question" data-index="$\{index\}">\
      <h2>$\{q.question\}</h2>\
      <ul>\
        $\{Object.entries(q.answers).map(\
          ([key, text], i) =>\
            `<li><button onclick="selectAnswer($\{i\})">$\{text\}</button></li>`\
        ).join("")\}\
      </ul>\
    </div>\
  `;\
\}\
\
function showResult() \{\
  const container = document.getElementById("quiz");\
  const maxScore = Math.max(...Object.values(scores));\
  const topType = Object.entries(scores).find(([_, score]) => score === maxScore)[0];\
\
  const archetypeMap = \{\
    A: "\uc0\u55358 \u56792  The Seer \'96 Rishi Vamadeva",\
    B: "\uc0\u9876 \u65039  The Warrior \'96 Indra",\
    C: "\uc0\u55356 \u57144  The Nurturer \'96 Aditi",\
    D: "\uc0\u55356 \u57256  The Mystic \'96 Sarasvati"\
  \};\
\
  container.innerHTML = `\
    <div class="result">\
      <h2>Your Archetype:</h2>\
      <p>$\{archetypeMap[topType]\}</p>\
    </div>\
  `;\
\}\
\
showQuestion(0);\
}