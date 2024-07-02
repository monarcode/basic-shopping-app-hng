import { ImageStyle, PressableProps, TextStyle, ViewStyle } from "react-native";

export type Prettify<T> = {
  [K in keyof T]: T[K];
};

type Styles = ViewStyle & TextStyle & ImageStyle & PressableProps["style"];
export type StylesMap = Record<string, Styles>;
