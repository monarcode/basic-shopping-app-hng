import { TProduct } from "types/products";

export const products: TProduct[] = [
  {
    id: 1,
    name: "Jumpman MVP",
    price: 799,
    image: require("../assets/images/jordans.png"),
  },
  {
    id: 2,
    name: "Nike Victory 2",
    price: 999,
    image: require("../assets/images/spikes.png"),
  },
  {
    id: 3,
    name: "Nike Kiger 9",
    price: 1299,
    image: require("../assets/images/kiger.png"),
  },
  {
    id: 4,
    name: "Air Jordan 13",
    price: 1299,
    image: require("../assets/images/jordan-13.png"),
  },
  {
    id: 5,
    name: "Jordan Max Aura",
    price: 1599,
    image: require("../assets/images/jordan-max.png"),
  },
  {
    id: 6,
    name: "Airforce 1",
    price: 1999,
    image: require("../assets/images/air-force-1.png"),
  },
];
