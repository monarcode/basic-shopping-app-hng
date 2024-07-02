import { Text, View } from "components/shared";
import { useNavigation } from "context/navigation";
import { Image, Pressable, StyleSheet } from "react-native";
import { THEME } from "theme";

const BottomTabs = () => {
  const { currentScreen, navigate } = useNavigation();

  const ProductsActiveIcon = require("../assets/icons/products-active.png");
  const ProductsInactiveIcon = require("../assets/icons/products-inactive.png");
  const CheckoutActiveIcon = require("../assets/icons/checkout-active.png");
  const CheckoutInactiveIcon = require("../assets/icons/checkout-inactive.png");

  return (
    <View style={styles.wrapper}>
      <Pressable style={styles.tab} onPress={() => navigate("Products")}>
        <Image
          style={styles.tabIcon}
          source={
            currentScreen === "Products"
              ? ProductsActiveIcon
              : ProductsInactiveIcon
          }
        />
        <Text style={styles.tabLabel}>Products</Text>
      </Pressable>

      <Pressable style={styles.tab} onPress={() => navigate("Checkout")}>
        <Image
          style={styles.tabIcon}
          source={
            currentScreen === "Checkout"
              ? CheckoutActiveIcon
              : CheckoutInactiveIcon
          }
        />
        <Text style={styles.tabLabel}>Checkout</Text>
      </Pressable>
    </View>
  );
};
export default BottomTabs;

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    width: "100%",
  },
  tab: {
    flexDirection: "column",
    alignItems: "center",
    paddingHorizontal: THEME.spacer * 8,
    paddingVertical: THEME.spacer,
    rowGap: THEME.spacer,
  },
  tabIcon: {
    width: 28,
    height: 28,
  },
  tabLabel: {
    fontSize: 13,
  },
});
