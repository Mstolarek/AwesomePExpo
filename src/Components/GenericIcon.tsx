import React from 'react';
import {StyleSheet} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useColorContext} from '../StateManagement/ColorContext/ColorContext';
export interface GenericIconProps {}

export const GenericIcon = (props: GenericIconProps) => {
  const {...other} = props;
  const palette = useColorContext().state;
  const stylesWithPalette = styles(palette);
  return <MaterialCommunityIcons style={stylesWithPalette.icon} {...other} />;
};

const styles = palette =>
  StyleSheet.create({
    icon: {
      color: palette.main,
      padding: 8,
    },
  });
