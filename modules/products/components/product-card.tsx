import { Text, View } from "components/shared";
import { useCart } from "context/cart";
import { formatCurrency } from "helpers/currencyFormat";
import { Image, Pressable, ViewProps } from "react-native";
import { TProduct } from "types/products";
import moduleStyles from "../styles";
import { styles } from "../styles/product-card.styles";

const ProductCard = ({ style, product }: ProductCardProps) => {
  const { addToCart, isInCart, removeFromCart } = useCart();

  const handleCartToggle = () => {
    if (isInCart(product.id)) {
      removeFromCart(product.id);
    } else {
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: 1,
        image: product.image,
      });
    }
  };

  return (
    <View style={[styles.container, style]}>
      <View style={moduleStyles.productCard.imageContainer}>
        <Image source={product.image} style={styles.image} />
      </View>

      <View>
        <Text style={moduleStyles.productCard.title} numberOfLines={1}>
          {product.name}
        </Text>
        <Text style={moduleStyles.productCard.pricing}>
          {formatCurrency(product.price)}
        </Text>
      </View>

      <Pressable
        onPress={handleCartToggle}
        style={moduleStyles.productCard.cartTrigger}
      >
        {isInCart(product.id) ? (
          <Image
            source={require("assets/icons/minus-icon-white.png")}
            style={{ width: 24, height: 24, margin: "auto" }}
          />
        ) : (
          <Image
            source={require("assets/icons/add-icon-white.png")}
            style={{ width: 24, height: 24, margin: "auto" }}
          />
        )}
      </Pressable>
    </View>
  );
};
export default ProductCard;

type ProductCardProps = ViewProps & {
  product: TProduct;
};
