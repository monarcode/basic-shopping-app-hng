import { Text, View } from "components/shared";
import { formatCurrency } from "helpers/currencyFormat";
import { Image, Pressable, ViewProps } from "react-native";
import { TProduct } from "types/products";
import moduleStyles from "../styles";
import { styles } from "../styles/product-card.styles";

const ProductCard = ({ style, product }: ProductCardProps) => {
  return (
    <View style={[styles.container, style]}>
      <View style={moduleStyles.productCard.imageContainer}></View>

      <View>
        <Text style={moduleStyles.productCard.title} numberOfLines={1}>
          {product.name}
        </Text>
        <Text style={moduleStyles.productCard.pricing}>
          {formatCurrency(product.price)}
        </Text>
      </View>

      <Pressable style={moduleStyles.productCard.cartTrigger}>
        <Image
          source={require("assets/icons/add-icon-white.png")}
          style={{ width: 24, height: 24, margin: "auto" }}
        />
      </Pressable>
    </View>
  );
};
export default ProductCard;

type ProductCardProps = ViewProps & {
  product: TProduct;
};
