import { Text, View } from "components/shared";
import globalStyles from "components/shared/global-styles";
import { useCart } from "context/cart";
import { Image, Pressable } from "react-native";
import ProductsList from "../components/products-list";
import moduleStyles from "../styles";

export default function ProductsScreen() {
  const { getTotalCount } = useCart();

  return (
    <View style={[moduleStyles.productScreen.container]}>
      {/* header section */}
      <View style={moduleStyles.productScreen.header}>
        <Text style={globalStyles.pageTitle}>Products</Text>

        <Pressable style={{ height: 48, width: 48, position: "relative" }}>
          <Image
            source={require("assets/icons/shopping-cart.png")}
            style={moduleStyles.productScreen.headerIcon}
          />

          {getTotalCount() > 0 && (
            <View style={moduleStyles.productScreen.countIndicator}>
              <Text style={{ fontSize: 10, margin: "auto" }}>
                {getTotalCount()}
              </Text>
            </View>
          )}
        </Pressable>
      </View>

      {/* product section */}
      <ProductsList />
    </View>
  );
}
