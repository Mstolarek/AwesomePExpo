import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {useColorContext} from '../../../StateManagement/ColorContext/ColorContext';

interface ColorValueBoxProps {
  color: 'red' | 'green' | 'blue';
}

export const ColorValueBox = (props: ColorValueBoxProps) => {
  const {color} = props;
  const palette = useColorContext().state;
  const stylesWithPalette = styles(palette);

  switch (color) {
    case 'red':
      return (
        <View style={stylesWithPalette.container}>
          <Text>{palette.base.red}</Text>
          <View style={stylesWithPalette.redBox} />
        </View>
      );

    case 'green':
      return (
        <View style={stylesWithPalette.container}>
          <Text>{palette.base.green}</Text>
          <View style={stylesWithPalette.greenBox} />
        </View>
      );
    case 'blue':
      return (
        <View style={stylesWithPalette.container}>
          <Text>{palette.base.blue}</Text>
          <View style={stylesWithPalette.blueBox} />
        </View>
      );
    default:
      return null;
  }
};

const styles = palette =>
  StyleSheet.create({
    container: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    redBox: {
      height: 16,
      width: 32,
      backgroundColor: `rgb(${palette.base.red} , 0 , 0)`,
      marginLeft: 8,
    },
    greenBox: {
      height: 16,
      width: 32,
      backgroundColor: `rgb(0 , ${palette.base.green} , 0)`,
      marginLeft: 8,
    },
    blueBox: {
      height: 16,
      width: 32,
      backgroundColor: `rgb(0 , 0 , ${palette.base.blue})`,
      marginLeft: 8,
    },
  });
