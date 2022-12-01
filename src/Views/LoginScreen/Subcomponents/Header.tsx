import React from 'react';
import {StyleSheet, Text} from 'react-native';

import {useColorContext} from '../../../StateManagement/ColorContext/ColorContext';
export const Header = () => {
  const palette = useColorContext().state;
  const stylesWithPalette = styles(palette);
  return <Text style={stylesWithPalette.headerText}>PORTFOLIO APP</Text>;
};
const styles = palette =>
  StyleSheet.create({
    headerText: {
      color: palette.contrastText,
      fontSize: 24,
      fontWeight: 'bold',
      backgroundColor: palette.main,
      padding: 16,
      borderBottomRightRadius: 90,
    },
  });
