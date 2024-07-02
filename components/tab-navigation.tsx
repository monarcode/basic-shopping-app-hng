import { View } from "components/shared";
import { useNavigation } from "context/navigation";
import CheckoutScreen from "modules/checkout/views/checkourt.screen";
import ProductsScreen from "modules/products/views/products.screen";
import { StyleSheet } from "react-native";
import { THEME } from "theme";
import BottomTabs from "./bottom-tabs";

const TabNavigation = () => {
  const { currentScreen } = useNavigation();

  const renderCurrentScreen = () => {
    switch (currentScreen) {
      case "Products":
        return <ProductsScreen />;
      case "Checkout":
        return <CheckoutScreen />;
      default:
        return <></>;
    }
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.screenWrapper}>{renderCurrentScreen()}</View>

      <View style={styles.tabWrapper}>
        <BottomTabs />
      </View>
    </View>
  );
};
export default TabNavigation;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  screenWrapper: {
    flex: 1,
    paddingHorizontal: THEME.spacer * 4,
  },
  tabWrapper: {
    flexDirection: "row",
    flexShrink: 0,
    borderTopWidth: 1,
    borderTopColor: "#384C56",
    height: 75,
  },
});
