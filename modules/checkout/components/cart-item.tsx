import { Text, View } from "components/shared";
import { useCart } from "context/cart";
import { formatCurrency } from "helpers/currencyFormat";
import { Image, Pressable } from "react-native";
import { THEME } from "theme";
import { type CartItem as CartItemType } from "types/cart";
import { moduleStyles } from "../styles";

const CartItem = ({ item }: { item: CartItemType }) => {
  const { updateQuantity } = useCart();

  return (
    <View style={moduleStyles.cartItem.container}>
      <View style={moduleStyles.cartItem.imageWrapper}>
        <Image source={item.image} style={moduleStyles.cartItem.image} />
      </View>

      <View style={{ flex: 1, paddingVertical: THEME.spacer * 2 }}>
        <Text style={moduleStyles.cartItem.title}>{item.name}</Text>
        <Text style={moduleStyles.cartItem.pricing}>
          {formatCurrency(item.price)}
        </Text>

        <View style={moduleStyles.cartItem.qtyRow}>
          <Pressable
            onPress={() => updateQuantity(item.id, item.quantity + 1)}
            style={moduleStyles.cartItem.qtyCtrl}
          >
            <Image
              source={require("assets/icons/plus-black.png")}
              style={moduleStyles.cartItem.qtyIcon}
            />
          </Pressable>

          <View style={{ flex: 0.1, alignItems: "center" }}>
            <Text>{item.quantity}</Text>
          </View>

          <Pressable
            onPress={() => updateQuantity(item.id, item.quantity - 1)}
            style={moduleStyles.cartItem.qtyCtrl}
          >
            <Image
              source={require("assets/icons/minus-black.png")}
              style={moduleStyles.cartItem.qtyIcon}
            />
          </Pressable>
        </View>
      </View>
    </View>
  );
};
export default CartItem;
