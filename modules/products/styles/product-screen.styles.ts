import { StyleSheet } from "react-native";
import { THEME } from "theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    rowGap: THEME.spacer * 4,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerIcon: { width: 24, height: 24, margin: "auto" },
});
