import { client } from "./client";
import { Drink, Ingredient, FilteredDrink } from "../Constants/types";

export interface GenericDrinksResponse {
  drinks: Drink[];
}

export interface GenericIngredientsResponse {
  ingredients: Ingredient[];
}

export interface GenericFilterResposne {
  drinks: FilteredDrink[];
}

export const getDrinkByName = async (drinkName: string) =>
  (await client.get<GenericDrinksResponse>(`search.php?s=${drinkName}`)).data;

export const getDrinkByIngredient = async (ingridientName: string) =>
  (await client.get<FilteredDrink>(`filter.php?i=${ingridientName}`)).data;

export const getIngredientByName = async (ingridientName: string) =>
  (
    await client.get<GenericIngredientsResponse>(
      `search.php?i=${ingridientName}`
    )
  ).data;

export const getIngredientById = async (ingridientId: string) =>
  (
    await client.get<GenericIngredientsResponse>(
      `lookup.php?iid=${ingridientId}`
    )
  ).data;

export const getDrinkById = async (drinkId: string) =>
  (await client.get<GenericDrinksResponse>(`lookup.php?i=${drinkId}`)).data;

export const getRandomDrink = async () =>
  (await client.get<GenericDrinksResponse>("random.php")).data;

export const getDrinksByLetter = async (letter: string) =>
  await (
    await client.get<GenericDrinksResponse>(`search.php?f=${letter}`)
  ).data;
