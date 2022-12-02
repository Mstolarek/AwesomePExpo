import React from "react";
import { Slider } from "@miblanchard/react-native-slider";
import { StyleSheet } from "react-native";
import { useColorContext } from "../StateManagement/ColorContext/ColorContext";
import { SliderProps } from "@miblanchard/react-native-slider/lib/types";

export interface GenericSliderProps extends SliderProps {}

export const GenericSlider = (props: GenericSliderProps) => {
  const { ...other } = props;
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

const styles = (palette) =>
  StyleSheet.create({
    container: { width: "100%" },
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
