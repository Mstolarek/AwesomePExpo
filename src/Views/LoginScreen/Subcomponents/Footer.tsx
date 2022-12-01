import React from 'react';
import {StyleSheet, Text} from 'react-native';

import {useColorContext} from '../../../StateManagement/ColorContext/ColorContext';
export const Footer = () => {
  const palette = useColorContext().state;
  const stylesWithPalette = styles(palette);
  return (
    <Text style={stylesWithPalette.headerText}>
      Made by Maciej Stolarek 2022
    </Text>
  );
};
const styles = palette =>
  StyleSheet.create({
    headerText: {
      color: palette.contrastText,
      textAlign: 'right',
      fontSize: 16,
      fontWeight: 'bold',
      backgroundColor: palette.main,
      padding: 16,
      borderTopLeftRadius: 90,
      elevation: 9,
    },
  });
