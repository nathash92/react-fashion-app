import React, { memo } from "react";
import { View } from "react-native";
import { PAGE_PAD } from "../../constants";
import BlockHeader from "../core/BlockHeader";
import ProductSlide from "./ProductSlide";

const BestSellers = () => {
  return (
    <>
      <View style={{ paddingRight: PAGE_PAD }}>
        <BlockHeader title="Best Sellers" showViewMore={true} />
      </View>
      <ProductSlide />
    </>
  );
};

export default memo(BestSellers);
