import React from 'react';
import {StyleSheet, Pressable, Text} from 'react-native';
import {useColorContext} from '../StateManagement/ColorContext/ColorContext';

export interface GenericButtonProps {
  title: string;
}

export const GenericButton = (props: GenericButtonProps) => {
  const {title, ...other} = props;
  const palette = useColorContext().state;
  const stylesWithPalette = styles(palette);
  return (
    <Pressable style={stylesWithPalette.button} {...other}>
      <Text style={stylesWithPalette.text}>{title}</Text>
    </Pressable>
  );
};

const styles = palette =>
  StyleSheet.create({
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: palette.main,
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 4,
      elevation: 3,
      margin: 8,
    },
    text: {
      color: palette.contrastText,
      fontSize: 16,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
    },
  });
