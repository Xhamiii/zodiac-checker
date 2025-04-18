const zodiacData = {
  aries: {
    traits: "Courageous, energetic, and confident.",
    luckyNumber: 9,
    tip: "Take initiative today — leadership suits you."
  },
  taurus: {
    traits: "Reliable, patient, and practical.",
    luckyNumber: 6,
    tip: "Stick to your plan. Consistency brings reward."
  },
  gemini: {
    traits: "Curious, adaptable, and outgoing.",
    luckyNumber: 5,
    tip: "Great day for learning something new!"
  },
  cancer: {
    traits: "Loyal, emotional, and caring.",
    luckyNumber: 2,
    tip: "Spend time with loved ones — you need it."
  },
  leo: {
    traits: "Charismatic, proud, and generous.",
    luckyNumber: 1,
    tip: "Let your confidence shine (but be kind)."
  },
  virgo: {
    traits: "Analytical, kind, and hardworking.",
    luckyNumber: 3,
    tip: "Use your eye for detail to fix something small."
  },
  libra: {
    traits: "Charming, fair, and balanced.",
    luckyNumber: 7,
    tip: "Seek harmony in decisions today."
  },
  scorpio: {
    traits: "Passionate, brave, and resourceful.",
    luckyNumber: 4,
    tip: "Trust your instincts — they won’t fail you."
  },
  sagittarius: {
    traits: "Optimistic, adventurous, and independent.",
    luckyNumber: 8,
    tip: "Take a small risk — it may lead to something big."
  },
  capricorn: {
    traits: "Disciplined, wise, and ambitious.",
    luckyNumber: 10,
    tip: "Focus on goals. Hard work will pay off."
  },
  aquarius: {
    traits: "Innovative, open-minded, and humanitarian.",
    luckyNumber: 11,
    tip: "Share your ideas — someone needs them."
  },
  pisces: {
    traits: "Compassionate, artistic, and intuitive.",
    luckyNumber: 12,
    tip: "Let your creativity flow freely today."
  }
};

function showZodiacInfo() {
  const sign = document.getElementById("zodiac").value;
  const resultBox = document.getElementById("result");

  if (zodiacData[sign]) {
    const info = zodiacData[sign];
    resultBox.innerHTML = `
      <h2>${sign.charAt(0).toUpperCase() + sign.slice(1)}</h2>
      <p><strong>Traits:</strong> ${info.traits}</p>
      <p><strong>Lucky Number:</strong> ${info.luckyNumber}</p>
      <p><strong>Daily Tip:</strong> ${info.tip}</p>
    `;
  } else {
    resultBox.innerHTML = "";
  }
}