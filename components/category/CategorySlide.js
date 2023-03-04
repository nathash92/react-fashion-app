import React, { memo } from "react";
import { View } from "react-native";
import { PAGE_PAD } from "../../constants";
import AppSwiper from "../core/AppSwiper";
import BlockHeader from "../core/BlockHeader";
import CategoryCard from "./CategoryCard";

const categories = [
  { id: 1, name: "Category 1" },
  { id: 2, name: "Category 2" },
  { id: 3, name: "Category 3" },
  { id: 4, name: "Category 4" },
];

const CategorySlide = () => {
  return (
    <>
      <View style={{ paddingRight: PAGE_PAD }}>
        <BlockHeader title="Categories" showViewMore={true} />
      </View>
      <AppSwiper
        data={categories}
        renderItem={(item) => (
          <View style={{ width: 160, height: 160, marginRight: 10 }}>
            <CategoryCard />
          </View>
        )}
        keyPicker="id"
      />
    </>
  );
};

export default memo(CategorySlide);
