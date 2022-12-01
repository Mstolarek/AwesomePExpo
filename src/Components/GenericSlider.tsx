import React from 'react';
import {Slider} from '@miblanchard/react-native-slider';
import {StyleSheet} from 'react-native';
import {useColorContext} from '../StateManagement/ColorContext/ColorContext';
export const GenericSlider = props => {
  const {...other} = props;
  const palette = useColorContext().state;
  const stylesWithPalette = styles(palette);

  return (
    <Slider
      {...other}
      containerStyle={stylesWithPalette.container}
      thumbStyle={stylesWithPalette.Slider}
      trackStyle={stylesWithPalette.track}
    />
  );
};

const styles = palette =>
  StyleSheet.create({
    container: {width: '100%'},
    Slider: {
      color: palette.main,
      backgroundColor: palette.main,
    },
    track: {
      borderColor: palette.light,
      borderRadius: 10,
      borderWidth: 2,
    },
  });
