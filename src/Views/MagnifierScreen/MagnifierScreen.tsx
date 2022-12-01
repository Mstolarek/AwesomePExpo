import React from "react";
import { View, StyleSheet, Text, SafeAreaView } from "react-native";

import { theme } from "../../Constants/theme";

export const MagnifierScreen = () => {
  return (
    <SafeAreaView style={styles.Container}>
      <Text>Magnifier Screen</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  Container: {
    backgroundColor: theme.backgroundColor,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
