import React, {createContext, useContext, useMemo, useReducer} from 'react';
import {types} from './Types';
import {randomizeColorPalette} from './randomizeColorPalette';
import {changeColorPalette, numberFrom0To255} from './changeColorPalette';

type Action = {type: string; payload: numberFrom0To255};
type Dispatch = (action: Action) => void;
type State = {
  base: {red: string; green: string; blue: string};
  main: string;
  dark: string;
  light: string;
  text: string;
  contrastText: string;
};
type ColorContextProps = {children: React.ReactNode};

const ColorContext = createContext<
  {state: State; dispatch: Dispatch} | undefined
>(undefined);

const ColorContextReducer = (state: State, action: Action) => {
  switch (action.type) {
    case types.RANDOMIZECOLORPALETTE:
      return randomizeColorPalette();
    case types.CHANGEREDVALUE:
      return changeColorPalette(state, 'red', action.payload);
    case types.CHANGEGREENVALUE:
      return changeColorPalette(state, 'green', action.payload);
    case types.CHANGEBLUEVALUE:
      return changeColorPalette(state, 'blue', action.payload);
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};

const ColorContextProvider = ({children}: ColorContextProps) => {
  const [state, dispatch] = useReducer(
    ColorContextReducer,
    randomizeColorPalette(),
  );
  const value = useMemo(() => ({state, dispatch}), [state]);
  return (
    <ColorContext.Provider value={value}>{children}</ColorContext.Provider>
  );
};

const useColorContext = () => {
  const context = useContext(ColorContext);
  if (context === undefined) {
    throw new Error(
      'useColorContext must be used within a ColorContextProvider',
    );
  }
  return context;
};

export {useColorContext, ColorContextProvider};
