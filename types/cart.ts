import { ImageSourcePropType } from "react-native";

export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: ImageSourcePropType;
}

export interface CartContextType {
  items: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  getTotalCount: () => number;
  getTotalValue: () => number;
  isInCart: (id: number) => boolean;
  clearCart: () => void;
}
