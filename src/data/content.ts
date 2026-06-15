/**
 * All bilingual copy lives here.
 * Edit this file to change ANY text in the experience without touching components.
 */

export const content = {
  // ============ SCENE 0 — PASSWORD GATE ============
  gate: {
    hintTop: "This door opens for one person.",
    prompt: "Enter the key, my friend.",
    wrong: "Not yet. Try again — you know it.",
    correct: "Welcome, Basmala. 🩷",
    buttonLabel: "Unlock",
  },

  // ============ SCENE 1 — THE GATE ============
  gateOpen: {
    en: "Open the door to Basmala's 18th.",
    ar: "افتحي الباب يا بسملة",
  },

  // ============ SCENE 2 — THE NILE ============
  nile: {
    en: "For Basmala — like Egypt's moonlit Nile, your light reflects on everyone around you.",
    ar: "بسملة… مثل نيل مصر تحت ضوء القمر، نوركِ ينعكس على كل من حولكِ",
  },

  // ============ SCENE 3 — TITLE REVEAL ============
  title: {
    main: { en: "Happy 18th Birthday, Basmala", ar: "عيد ميلادكِ الثامن عشر، يا بسملة" },
    subline: {
      en: "From your favorite person — celebrating one year of friendship, a lifetime of light.",
      ar: "من شخصكِ المفضل — نحتفل بسنة صداقة واحدة، وعمر من النور",
    },
  },

  // ============ SCENE 4 — TIMELINE ============
  timeline: {
    header: { en: "One Year of Us", ar: "سنة لنا نحن" },
    cards: [
      {
        title: { en: "The Day We Met", ar: "اليوم الذي التقينا فيه" },
        body: {
          en: "You laughed at something I'd said, and I remember thinking: this one's going to matter.",
          ar: "ضحكتِ على شيء قلته، وتذكرت حينها: هذه ستترك أثرًا.",
        },
      },
      {
        title: { en: "Our First Late-Night Talk", ar: "أول حديث لنا في وقت متأخر من الليل" },
        body: {
          en: "Hours disappeared without either of us noticing. That's when I knew.",
          ar: "تلاشت الساعات دون أن ننتبه. عندها عرفتُ.",
        },
      },
      {
        title: { en: "The Memory That Sealed It", ar: "الذكرى التي ختمت كل شيء" },
        body: {
          en: "There's a moment I'll never tell you fully — but you felt it too, didn't you?",
          ar: "لحظة لن أرويها لكِ كاملة — لكنكِ شعرتِ بها أيضًا، أليس كذلك؟",
        },
      },
      {
        title: { en: "Today", ar: "اليوم" },
        body: {
          en: "365 days. One beautiful friendship. The first of many, insha'Allah.",
          ar: "365 يومًا. صداقة جميلة واحدة. الأولى من كثير، إن شاء الله.",
        },
      },
    ],
  },

  // ============ SCENE 5 — FAVORITES ============
  favorites: {
    purple: { word: { en: "Purple", ar: "البنفسجي" }, note: { en: "The color of queens. Yours.", ar: "لون الملكات. لونكِ." } },
    roses: { word: { en: "Roses", ar: "الورود" }, note: { en: "Like enchanted roses — beautiful, fleeting, eternal.", ar: "مثل الورود المسحورة — جميلة، عابرة، أبدية." } },
    batb: { word: { en: "Beauty & the Beast", ar: "الجميلة والوحش" }, note: { en: "Because love sees what eyes cannot.", ar: "لأن الحب يرى ما لا تراه العيون." } },
    f1: { word: { en: "F1", ar: "فورمولا ١" }, note: { en: "Fast, focused, fearless. That's you on your best days.", ar: "سريعة، مركزة، شجاعة. هكذا أنتِ في أفضل أيامكِ." } },
    dogTeaser: { word: { en: "A Small Friend", ar: "صديقة صغيرة" }, note: { en: "Wait for it… 🐾", ar: "انتظري… 🐾" } },
  },

  // ============ SCENE 6 — DOG SURPRISE ============
  dog: {
    heading: {
      en: "Every queen deserves a tiny loyal friend.",
      ar: "كل ملكة تستحق صديقة صغيرة وفية.",
    },
    body: {
      en: "Meet your surprise — a little fluff of unconditional love, sent with all my heart. 🤍",
      ar: "قابلِي مفاجأتكِ — كرة صغيرة من الحب غير المشروط، أُرسلت من قلبي. 🤍",
    },
    pet: { en: "She loves you back.", ar: "وهي تحبكِ بالمقابل." },
  },

  // ============ SCENE 7 — EIGHTEEN ============
  eighteen: {
    header: {
      en: "You are 18 — a chapter begins.",
      ar: "أنتِ الآن 18 — فصلٌ جديد يبدأ.",
    },
    body: {
      en: "May your years ahead be as elegant, brave, and beautiful as you already are.",
      ar: "ليكن عمركِ القادم بأناقة وشجاعة وجمال مثلكِ تمامًا.",
    },
    dua: "اللهم بارك لها في عمرها، وأدم عليها نعمتك، واجعلها من السعداء في الدنيا والآخرة",
    duaTranslation:
      "O Allah, bless her in her years, keep Your blessings upon her, and make her among the happy ones in this world and the next.",
  },

  // ============ SCENE 8 — CAKE ============
  cake: {
    heading: {
      en: "Make a wish, Basmala. This one's yours.",
      ar: "تمنّي أمنية، يا بسملة. هذه لكِ.",
    },
    sub: {
      en: "18 candles. One dream. All of it — yours.",
      ar: "18 شمعة. حلم واحد. كله — لكِ.",
    },
    cutPrompt: { en: "Tap to cut the cake", ar: "اضغطي لقص الكعكة" },
  },

  // ============ SCENE 9 — CUT ============
  cut: {
    heading: { en: "Happy birthday, Princess. 🩷", ar: "عيد ميلاد سعيد، يا أميرتي. 🩷" },
    body: {
      en: "I can't wait to see who you become at 19, 25, 30 — every year, I'll still be right here.",
      ar: "لا أستطيع الانتظار لأرى من ستصبحين في 19، 25، 30 — كل سنة، سأبقى هنا.",
    },
  },

  // ============ SCENE 10 — FOREVER ============
  forever: {
    heading: { en: "For Basmala — today, tomorrow, always.", ar: "بسملة — اليوم، وغدًا، ودائمًا." },
    signature: { en: "With love, your friend. 🤍", ar: "بحب، صديقتكِ. 🤍" },
    dua: "كل عام وأنتِ بخير يا بسملة",
    duaTranslation: "May you be well every year, Basmala.",
    replayLabel: { en: "Replay the journey", ar: "إعادة الرحلة" },
  },
} as const;

export type Content = typeof content;
