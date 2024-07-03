import { ImageSourcePropType } from "react-native";

export type TProduct = {
  id: number;
  name: string;
  price: number;
  image: ImageSourcePropType;
};
