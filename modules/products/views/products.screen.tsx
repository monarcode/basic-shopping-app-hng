import { Text, View } from "components/shared";
import globalStyles from "components/shared/global-styles";
import { Image, Pressable } from "react-native";
import ProductsList from "../components/products-list";
import moduleStyles from "../styles";

export default function ProductsScreen() {
  return (
    <View style={[moduleStyles.productScreen.container]}>
      {/* header section */}
      <View style={moduleStyles.productScreen.header}>
        <Text style={globalStyles.pageTitle}>Products</Text>

        <Pressable style={{ height: 48, width: 48 }}>
          <Image
            source={require("assets/icons/shopping-cart.png")}
            style={moduleStyles.productScreen.headerIcon}
          />
        </Pressable>
      </View>

      {/* product section */}
      <ProductsList />
    </View>
  );
}
