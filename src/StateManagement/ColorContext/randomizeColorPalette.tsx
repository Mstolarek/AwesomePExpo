export const randomizeColorPalette = () => {
  const randomRed = Number((Math.random() * 255).toFixed());
  const randomGreen = Number((Math.random() * 255).toFixed());
  const randomBlue = Number((Math.random() * 255).toFixed());

  const lightRed = randomRed * 1.3 > 255 ? 255 : (randomRed * 1.3).toFixed();
  const lightGreen =
    randomGreen * 1.3 > 255 ? 255 : (randomGreen * 1.3).toFixed();
  const lightBlue = randomBlue * 1.3 > 255 ? 255 : (randomBlue * 1.3).toFixed();

  const darkRed = (randomRed * 0.7).toFixed();
  const darkGreen = (randomGreen * 0.7).toFixed();
  const darkBlue = (randomBlue * 0.7).toFixed();

  return {
    base: {red: randomRed, green: randomGreen, blue: randomBlue},
    main: `rgb(${randomRed} , ${randomGreen} , ${randomBlue})`,
    light: `rgb(${lightRed} , ${lightGreen} , ${lightBlue})`,
    dark: `rgb(${darkRed} , ${darkGreen} , ${darkBlue})`,
    text: 'rgba(0,0,0,0.6)',
    contrastText: randomGreen > 120 ? 'rgba(0,0,0,0.6)' : 'rgb(255,255,255)',
  };
};
