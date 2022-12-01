import {types} from './Types';

export const randomizeColorPalette = () => {
  return {type: types.RANDOMIZECOLORPALETTE};
};

export const changeRedTone = payload => {
  return {type: types.CHANGEREDVALUE, payload: payload};
};

export const changeGreenTone = payload => {
  return {type: types.CHANGEGREENVALUE, payload: payload};
};

export const changeBlueTone = payload => {
  return {type: types.CHANGEBLUEVALUE, payload: payload};
};
