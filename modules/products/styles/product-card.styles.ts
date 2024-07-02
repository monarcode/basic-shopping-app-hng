import { StyleSheet } from "react-native";
import { THEME } from "theme";

export const styles = StyleSheet.create({
  container: {
    maxWidth: "47%",
    width: "100%",
    rowGap: THEME.spacer * 2,
    position: "relative",
  },
  imageContainer: {
    height: 220,
    backgroundColor: THEME.colors["card-bg"],
    borderRadius: THEME.spacer * 4,
  },
  title: {
    fontSize: 18,
    fontWeight: "500",
  },
  pricing: {
    color: THEME.colors.accent,
  },
  cartTrigger: {
    position: "absolute",
    top: THEME.spacer * 2,
    right: THEME.spacer * 2,
    width: 40,
    height: 40,
    borderRadius: THEME.spacer * 2,
    backgroundColor: THEME.colors["grey-green"],
  },
});
