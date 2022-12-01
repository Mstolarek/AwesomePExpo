import { useQuery } from "@tanstack/react-query";

import React from "react";
import { StyleSheet, SafeAreaView, FlatList } from "react-native";

import { getDrinksByLetter, getRandomDrink } from "../../API/drinks";
import { DrinkCard } from "../../Components/DrinkCard/DrinkCard";

import { GenericLoading } from "../../Components/GenericLoading";
import { theme } from "../../Constants/theme";
import { HomeHeader } from "./Subcomponents/HomeHeader";

export const HomeScreen = () => {
  const drinksByLetterQuery = useQuery(["DrinksAlphabet"], () =>
    getDrinksByLetter("a")
  );

  return (
    <SafeAreaView style={styles.containet}>
      <HomeHeader />

      {drinksByLetterQuery.isInitialLoading ? (
        <GenericLoading />
      ) : (
        <FlatList
          data={drinksByLetterQuery.data.drinks}
          renderItem={({ item }) => <DrinkCard drink={item} />}
          keyExtractor={(item) => item.idDrink}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  containet: {
    flex: 1,
    backgroundColor: theme.backgroundColor,
  },
});
