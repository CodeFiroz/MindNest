const demoEditorData = {
  time: Date.now(),
  blocks: [
    {
      type: "paragraph",
      data: {
        text: "Life’s been moving at the speed of Wi-Fi in a subway tunnel lately. But today, I paused. I sat by the window, coffee in hand, and just... existed."
      }
    },
    {
      type: "header",
      data: {
        text: "Things I did to ground myself:",
        level: 3
      }
    },
    {
      type: "list",
      data: {
        style: "unordered",
        items: [
          "🧘 10 minutes of meditation",
          "📵 Put my phone in airplane mode (felt like I time-traveled)",
          "☀️ Took a walk in the sun — Vitamin D supremacy",
          "📖 Read 3 pages of a book I’ve been 'reading' for months"
        ]
      }
    },
    {
      type: "header",
      data: {
        text: "Random Thought",
        level: 3
      }
    },
    {
      type: "quote",
      data: {
        text: "Stillness is not the absence of movement—it’s the presence of intention.",
        caption: "— me (or some philosopher on TikTok, I forgot)",
        alignment: "center"
      }
    },
    {
      type: "header",
      data: {
        text: "Mood Tracker Tags",
        level: 3
      }
    }, 
    {
      type: "list",
      data: {
        style: "checklist",
        items: [
          {content: "🧘 10 minutes of meditation", meta : {checked: true}, items: []},
          {content: "📵 Put my phone in airplane mode (felt like I time-traveled)", meta : {checked: true}, items: []},
          {content: "☀️ Took a walk in the sun — Vitamin D supremacy", meta : {checked: false}, items: []},
         
        ]
      }
    },
    {
      type: "codetool",
      data: {
        code: "<div className=\"w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 ...\">\n",
      }
    }, 
  ],
  version: "2.29.1"
};

export default demoEditorData;