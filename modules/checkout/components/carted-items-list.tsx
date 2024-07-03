import { Text, View } from "components/shared";
import globalStyles from "components/shared/global-styles";
import { useCart } from "context/cart";
import { useNavigation } from "context/navigation";
import { FlatList, Pressable } from "react-native";
import { THEME } from "theme";
import { moduleStyles } from "../styles";
import CartItem from "./cart-item";

const CartedItemsList = () => {
  const { items, clearCart } = useCart();
  const { navigate } = useNavigation();

  const handleComplete = () => {
    navigate("Order-Complete");
    clearCart();
  };

  return (
    <View style={moduleStyles.checkoutScreen.listWrapper}>
      <FlatList
        data={items}
        renderItem={({ item }) => <CartItem item={item} />}
        contentContainerStyle={{
          paddingBottom: THEME.spacer,
          rowGap: THEME.spacer * 4,
        }}
        style={[
          globalStyles.fill,
          {
            borderRadius: 10,
          },
        ]}
        showsVerticalScrollIndicator={false}
      />

      <Pressable
        style={moduleStyles.checkoutScreen.cta}
        onPress={handleComplete}
      >
        <Text>Confirm Order</Text>
      </Pressable>
    </View>
  );
};
export default CartedItemsList;
