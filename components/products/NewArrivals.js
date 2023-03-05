import { useNavigation } from "@react-navigation/native";
import React, { memo } from "react";
import { View } from "react-native";
import { PAGE_PAD } from "../../constants";
import BlockHeader from "../core/BlockHeader";
import ProductSlide from "./ProductSlide";

const NewArrivals = () => {
  const navigation = useNavigation();

  const viewMoreHandler = () => {
    navigation.navigate("ProductList");
  };

  return (
    <>
      <View style={{ paddingRight: PAGE_PAD }}>
        <BlockHeader
          title="New Arrivals"
          showViewMore={true}
          viewMoreClick={viewMoreHandler}
        />
      </View>
      <ProductSlide />
    </>
  );
};

export default memo(NewArrivals);
