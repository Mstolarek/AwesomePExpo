type CreateArrayWithLengthX<
  LENGTH extends number,
  ACC extends unknown[] = [],
> = ACC['length'] extends LENGTH
  ? ACC
  : CreateArrayWithLengthX<LENGTH, [...ACC, 1]>;

type NumericRange<
  START_ARR extends number[],
  END extends number,
  ACC extends number = never,
> = START_ARR['length'] extends END
  ? ACC | END
  : NumericRange<[...START_ARR, 1], END, ACC | START_ARR['length']>;

export type numberFrom0To255 = NumericRange<CreateArrayWithLengthX<0>, 255>;

export const changeColorPalette = (
  baseColorPalette: {
    base: {red: string; green: string; blue: string};
    main: string;
    dark: string;
    light: string;
    text: string;
    contrastText: string;
  },
  colorToSet: 'red' | 'green' | 'blue',
  value: numberFrom0To255,
) => {
  const baseRed = baseColorPalette.main
    .substring(4, baseColorPalette.main.length - 1)
    .replace(/ /g, '')
    .split(',')[0];

  const baseGreen = baseColorPalette.main
    .substring(4, baseColorPalette.main.length - 1)
    .replace(/ /g, '')
    .split(',')[1];

  const baseBlue = baseColorPalette.main
    .substring(4, baseColorPalette.main.length - 1)
    .replace(/ /g, '')
    .split(',')[2];

  switch (colorToSet) {
    case 'red':
      return {
        base: {red: value, green: baseGreen, blue: baseBlue},
        main: `rgb(${value} , ${baseGreen} , ${baseBlue})`,
        dark: `rgb(${(value * 0.7).toFixed()} , ${baseGreen} , ${baseBlue})`,
        light: `rgb(${
          value * 1.3 > 255 ? 255 : (value * 1.3).toFixed()
        } , ${baseGreen} , ${baseBlue})`,
        text: baseColorPalette.text,
        contrastText: baseColorPalette.contrastText,
      };

    case 'green':
      return {
        base: {red: baseRed, green: value, blue: baseBlue},
        main: `rgb(${baseRed} , ${value} , ${baseBlue})`,
        dark: `rgb(${baseRed} , ${(value * 0.7).toFixed()} , ${baseBlue})`,
        light: `rgb(${baseRed} , ${
          value * 1.3 > 255 ? 255 : (value * 1.3).toFixed()
        } , ${baseBlue})`,
        text: baseColorPalette.text,
        contrastText: value > 120 ? 'rgba(0,0,0,0.6)' : 'rgb(255,255,255)',
      };

    case 'blue':
      return {
        base: {red: baseRed, green: baseGreen, blue: value},
        main: `rgb(${baseRed} , ${baseGreen} , ${value})`,
        dark: `rgb(${baseRed} , ${baseGreen} , ${(value * 0.7).toFixed()})`,
        light: `rgb(${baseRed} , ${baseGreen} , ${
          value * 1.3 > 255 ? 255 : (value * 1.3).toFixed()
        })`,
        text: baseColorPalette.text,
        contrastText: baseColorPalette.contrastText,
      };
    default:
      return baseColorPalette;
  }
};
