import React, { memo } from "react";
import { View } from "react-native";
import AppSwiper from "../core/AppSwiper";
import ProductCard from "./ProductCard";

const products = [
  {
    id: 1,
    name: "Product1",
  },
  {
    id: 2,
    name: "Product1",
  },
  {
    id: 3,
    name: "Product1",
  },
];

const ProductSlide = () => {
  return (
    <AppSwiper
      spacing={10}
      renderItem={({ item }) => {
        return (
          <View style={{ width: 160, marginRight: 10 }}>
            <ProductCard />
          </View>
        );
      }}
      keyPicker="id"
      data={products}
    />
  );
};

export default memo(ProductSlide);
