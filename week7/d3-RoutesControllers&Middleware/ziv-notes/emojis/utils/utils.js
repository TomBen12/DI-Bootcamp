export const getRandomNumber = (arr) => {
  return Math.floor(Math.random() * arr.length);
};

export const getRandomElementFromArray = (arr) => {
  const randomIndx = Math.floor(Math.random() * arr.length);
  return arr[randomIndx];
};

export const generateOption = (currentEmoji, emojis) => {
  const options = [currentEmoji];
  while (options.length < 4) {
    const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
    if (!options.includes(randomEmoji.name)) {
      options.push(randomEmoji.name);
    }
  }
  return options;
};

export const shuffeArray = (arr) => {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};
