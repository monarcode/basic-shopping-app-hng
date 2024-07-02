import { Platform, StatusBar, StyleSheet } from "react-native";

export default StyleSheet.create({
  androidSafeArea: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  fill: {
    flex: 1,
  },
  pageTitle: {
    fontSize: 32,
    fontWeight: "500",
  },
});
