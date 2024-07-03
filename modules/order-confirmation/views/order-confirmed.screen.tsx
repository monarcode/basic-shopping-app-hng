import { Text, View } from "components/shared";
import globalStyles from "components/shared/global-styles";
import { useNavigation } from "context/navigation";
import { moduleStyles } from "modules/checkout/styles";
import { Image, Pressable } from "react-native";
import { THEME } from "theme";

const OrderCOnfirmed = () => {
  const { navigate } = useNavigation();

  return (
    <View style={[globalStyles.fill, { paddingHorizontal: THEME.spacer * 4 }]}>
      <View style={{ flex: 1, alignItems: "center" }}>
        <View
          style={[
            moduleStyles.checkoutScreen.emptyContainer,
            { rowGap: THEME.spacer * 8 },
          ]}
        >
          <Image
            source={require("assets/images/success.png")}
            style={moduleStyles.checkoutScreen.image}
          />

          <View style={moduleStyles.checkoutScreen.messageContainer}>
            <Text style={{ fontSize: 24, fontWeight: "600" }}>
              Order Successful
            </Text>
            <Text style={{ textAlign: "center" }}>
              Your order has been confirmed, we will get back to you shortky
            </Text>
          </View>
        </View>

        <Pressable
          style={[
            moduleStyles.checkoutScreen.cta,
            {
              marginTop: "auto",
            },
          ]}
          onPress={() => navigate("Products")}
        >
          <Text>Go Home</Text>
        </Pressable>
      </View>
    </View>
  );
};
export default OrderCOnfirmed;
