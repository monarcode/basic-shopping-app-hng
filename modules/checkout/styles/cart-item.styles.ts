import { StyleSheet } from "react-native";
import { THEME } from "theme";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    columnGap: THEME.spacer * 4,
  },
  imageWrapper: {
    width: 110,
    height: 110,
    borderRadius: 10,
    backgroundColor: THEME.colors["card-bg"],
  },
  image: {
    width: "90%",
    height: "90%",
    objectFit: "contain",
    margin: "auto",
  },
  title: {
    fontSize: 20,
    fontWeight: "500",
  },
  pricing: {
    color: THEME.colors["faded-pink"],
    marginTop: THEME.spacer,
  },
  qtyRow: {
    marginTop: "auto",
    flexDirection: "row",
    gap: THEME.spacer * 5,
    alignItems: "center",
  },
  qtyCtrl: {
    backgroundColor: THEME.colors.accent,
    width: 30,
    height: 30,
    borderRadius: 6,
  },
  qtyIcon: {
    width: 20,
    height: 20,
    margin: "auto",
  },
});
