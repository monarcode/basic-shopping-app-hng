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
  countIndicator: {
    height: 16,
    width: 16,
    borderRadius: 999,
    backgroundColor: THEME.colors.highlight,
    position: "absolute",
    top: THEME.spacer * 2,
    right: THEME.spacer * 2,
  },
});
