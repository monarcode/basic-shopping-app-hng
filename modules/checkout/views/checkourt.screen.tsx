import { Text, View } from "components/shared";
import globalStyles from "components/shared/global-styles";
import { useCart } from "context/cart";
import { formatCurrency } from "helpers/currencyFormat";
import { Image } from "react-native";
import { THEME } from "theme";
import CartedItemsList from "../components/carted-items-list";
import { moduleStyles } from "../styles";

const CheckoutScreen = () => {
  const { getTotalCount, getTotalValue } = useCart();

  return (
    <View style={[globalStyles.fill, { rowGap: THEME.spacer * 4 }]}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text style={globalStyles.pageTitle}>Checkout</Text>

        <View style={{ alignItems: "flex-end", gap: THEME.spacer }}>
          <Text style={{ fontSize: 13, color: THEME.colors["faded-pink"] }}>
            Total
          </Text>
          <Text style={{ color: THEME.colors.accent }}>
            {formatCurrency(getTotalValue())}
          </Text>
        </View>
      </View>

      {getTotalCount() > 0 ? (
        <CartedItemsList />
      ) : (
        <View style={moduleStyles.checkoutScreen.emptyContainer}>
          <Image
            source={require("assets/images/empty-cart.png")}
            style={moduleStyles.checkoutScreen.image}
          />

          <View style={moduleStyles.checkoutScreen.messageContainer}>
            <Text style={{ fontSize: 24, fontWeight: "600" }}>Cart Empty</Text>
            <Text style={{ textAlign: "center" }}>
              Oops, looks like you haven’t added any items yet
            </Text>
          </View>
        </View>
      )}
    </View>
  );
};
export default CheckoutScreen;
