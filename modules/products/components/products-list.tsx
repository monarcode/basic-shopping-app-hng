import { products } from "constants/products";
import { FlatList } from "react-native";
import { THEME } from "theme";
import ProductCard from "./product-card";

const ProductsList = () => {
  return (
    <>
      <FlatList
        keyExtractor={({ id }) => id.toString()}
        renderItem={({ item }) => <ProductCard product={item} />}
        data={products}
        numColumns={2}
        contentContainerStyle={{
          rowGap: THEME.spacer * 6,
          paddingBottom: THEME.spacer * 4,
        }}
        columnWrapperStyle={{
          justifyContent: "space-between",
        }}
        showsVerticalScrollIndicator={false}
      />
    </>
  );
};
export default ProductsList;
