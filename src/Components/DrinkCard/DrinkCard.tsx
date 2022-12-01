import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  ScrollView,
  FlatList,
} from "react-native";
import { Drink } from "../../Constants/types";
import { GenericIcon } from "../GenericIcon";

export interface DrinkCardProps {
  drink: Drink;
}

const emojiSwitch = (name: string) => {
  switch (name) {
    case "Ordinary Drink":
      return "🥃";
    case "Cocktail":
      return "🍹";
    case "Shake":
      return "🥤";
    case "Other/Unknown":
      return "🥤";
    case "Cocoa":
      return "☕";
    case "Shot":
      return "🥛";
    case "Coffee / Tea":
      return "☕";
    case "Homemade Liqueur":
      return "🫙";
    case "Punch / Party Drink":
      return "🥂";
    case "Beer":
      return "🍺";
    case "Soft Drink":
      return "🧃";
    default:
      return "🥤";
  }
};

export const DrinkCard = (props: DrinkCardProps) => {
  const { drink } = props;

  const IngredientsArray = Array.apply(null, Array(15)).map(
    (element, index) => ({
      ingredient: drink[`strIngredient${index + 1}`],
      measure: drink[`strMeasure${index + 1}`],
    })
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerView}>
        <Text style={styles.headerText}>
          {emojiSwitch(drink.strCategory)}
          {"  "}
          {drink.strDrink}
        </Text>
        <GenericIcon name="cards-heart-outline" size={32} />
      </View>

      <Image
        style={styles.image}
        source={{
          uri: drink.strDrinkThumb,
        }}
      />
      <View style={styles.captionView}>
        <Text style={styles.captionTitle}>Ingredients</Text>

        <FlatList
          data={IngredientsArray}
          keyExtractor={(item, index) => index}
          renderItem={({ item }) =>
            item.ingredient ? (
              <View
                style={{
                  justifyContent: "space-between",
                  flexDirection: "row",
                }}
              >
                <Text>{item.ingredient}</Text>
                <Text>{item.measure}</Text>
              </View>
            ) : null
          }
        />

        <Text style={styles.captionTitle}>Instructions</Text>
        <Text>{drink.strInstructions}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    width: "100%",
    marginVertical: 8,
  },
  image: {
    resizeMode: "cover",
    width: "100%",
    height: undefined,
    aspectRatio: 1 / 1,
  },
  headerView: {
    display: "flex",

    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    paddingHorizontal: 16,
  },
  captionView: { paddingHorizontal: 16 },
  captionTitle: { paddingBottom: 4, paddingTop: 16, fontWeight: "bold" },
});
