import Router from "components/router";
import globalStyles from "components/shared/global-styles";
import { CartProvider } from "context/cart";
import { NavigationProvider } from "context/navigation";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet } from "react-native";
import { THEME } from "theme";

export default function App() {
  return (
    <SafeAreaView style={[globalStyles.androidSafeArea, styles.container]}>
      <NavigationProvider>
        <CartProvider>
          <Router />
        </CartProvider>
      </NavigationProvider>
      <ExpoStatusBar style="light" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.colors["grey-green"],
  },
});
