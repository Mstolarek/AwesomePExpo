import React from "react";
import { View, StyleSheet, Text, SafeAreaView } from "react-native";
import { Header } from "./Subcomponents/Header";

import { useColorContext } from "../../StateManagement/ColorContext/ColorContext";
import { Footer } from "./Subcomponents/Footer";

import Drawboard from "./Subcomponents/Drawboard";
import { theme } from "../../Constants/theme";

export const LoginScreen = () => {
  const palette = useColorContext().state;
  const stylesWithPalette = styles(palette);

  return (
    <SafeAreaView style={stylesWithPalette.Container}>
      <Header />
      <Text style={stylesWithPalette.captionText}>
        Welcome to my app {"\n"}Draw marked shape to enter
      </Text>
      <View style={stylesWithPalette.drawboardContainer}>
        <Drawboard />
      </View>

      <Footer />
    </SafeAreaView>
  );
};

const styles = (palette) =>
  StyleSheet.create({
    Container: {
      backgroundColor: theme.backgroundColor,
      display: "flex",
      justifyContent: "space-between",
      flex: 1,
    },
    captionText: { fontSize: 16, color: palette.text, padding: 8 },
    drawboardContainer: { padding: 16, flex: 1 },
  });
