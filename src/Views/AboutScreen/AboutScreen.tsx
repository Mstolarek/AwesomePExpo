import React from "react";
import { useState } from "react";
import { View, StyleSheet, Text, SafeAreaView } from "react-native";
import { GenericIcon } from "../../Components/GenericIcon";
import { theme } from "../../Constants/theme";
import { GenericButton } from "../../Components/GenericButton";
import { useColorContext } from "../../StateManagement/ColorContext/ColorContext";
import { ChangeColorModal } from "./Subcomponents/ChangeColorModal";
import { useNavigation } from "@react-navigation/native";
export const AboutScreen = () => {
  const palette = useColorContext().state;
  const stylesWithPalette = styles(palette);

  const [colorsModal, setColorsModal] = useState<boolean>(false);
  const navigation = useNavigation();
  return (
    <>
      <SafeAreaView style={stylesWithPalette.Container}>
        <View style={stylesWithPalette.brushContainer}>
          <Text style={stylesWithPalette.text1}>
            You can customize color theme of this app!
          </Text>
          <GenericIcon
            name="brush"
            size={40}
            onPress={() => {
              setColorsModal(true);
            }}
          />
        </View>
        <Text style={stylesWithPalette.text1}>Kujowa Apka xD</Text>
        <Text style={stylesWithPalette.text1}>{palette.main}</Text>
        <Text style={stylesWithPalette.text2}>{palette.contrastText}</Text>
        <GenericButton
          title="Wyloguj"
          onPress={() => navigation.navigate("Login")}
        />
      </SafeAreaView>
      <ChangeColorModal
        open={colorsModal}
        onClose={() => setColorsModal(false)}
      />
    </>
  );
};

const styles = (palette) =>
  StyleSheet.create({
    Container: {
      backgroundColor: theme.backgroundColor,
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    brushContainer: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },

    text1: { color: palette.text },
    text2: { color: palette.contrastText },
  });
