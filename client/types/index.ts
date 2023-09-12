import { ImageProps } from "react-native";

export type Dish = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: ImageProps;
};

export type Restaurant = {
  id: number;
  name: string;
  image: ImageProps;
  description: string;
  lng: number;
  lat: number;
  address: string;
  stars: number;
  reviews: string;
  category: string;
  dishes: Dish[];
};

export type Featured = {
  id: number;
  title: string;
  description: string;
  restaurants: Restaurant[];
};
