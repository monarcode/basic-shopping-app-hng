import { StyleSheet } from "react-native";
import { THEME } from "theme";

export const styles = StyleSheet.create({
  emptyContainer: { flex: 1, justifyContent: "center", alignItems: "center" },
  image: { width: 230, height: 230 },
  messageContainer: { alignItems: "center", paddingHorizontal: 60, rowGap: 8 },
  cta: {
    height: 50,
    width: "100%",
    backgroundColor: THEME.colors.highlight,
    borderRadius: THEME.spacer * 3,
    justifyContent: "center",
    alignItems: "center",
  },
  listWrapper: {
    flex: 1,
    paddingBottom: THEME.spacer * 4,
    rowGap: THEME.spacer * 4,
  },
});
