import Ionicons from "@expo/vector-icons/Ionicons";
import { Button, Text } from "@rneui/themed";
import React, { memo, useEffect } from "react";
import { Dimensions } from "react-native";
import { FlatList, ScrollView, StyleSheet, View } from "react-native";
import BannerSlide from "../components/banner/BannerSlide";
import ProductCard2 from "../components/products/ProductCard2";
import AppSearch from "../components/search/AppSearch";
import { GAP, PAGE_PAD } from "../constants";
import appStyles from "../styles/styles";

const dimensions = Dimensions.get("window");

const data = [
  { id: 1, name: "Product 1" },
  { id: 2, name: "Product 2" },
  { id: 3, name: "Product 3" },
  { id: 4, name: "Product 4" },
  { id: 5, name: "Product 5" },
  { id: 6, name: "Product 6" },
  { id: 7, name: "Product 7" },
  { id: 8, name: "Product 8" },
  { id: 9, name: "Product 9" },
  { id: 10, name: "Product 10" },
];

const ProductListScreen = ({ navigation }) => {
  useEffect(() => {
    navigation.setOptions({
      title: "T-Shirts",
      subTitle: "100 items",
    });
  }, []);

  const renderItem = ({ item, index }) => {
    return (
      <View style={{ margin: 5 }}>
        <ProductCard2 />
      </View>
    );
  };

  return (
    <>
      {/* FILTER BLOCK START */}
      <View style={styles.filterBlk}>
        <View style={{ flexGrow: 1 }}>
          <AppSearch />
        </View>
        <Button type="clear" titleStyle={styles.actionBtn}>
          <Ionicons color="black" size={20} name="options-outline" />
          Sort
        </Button>
        <Button type="clear" titleStyle={styles.actionBtn}>
          <Ionicons color="black" size={20} name="filter-outline" />
          Filter
        </Button>
      </View>
      {/* FILTER BLOCK END */}
      <FlatList
        style={{ padding: PAGE_PAD - 5, marginBottom: 10 }}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        data={data}
        numColumns={2}
        ListHeaderComponent={
          <View
            style={[
              appStyles.mainBannerContainer,
              { paddingHorizontal: PAGE_PAD - 10, marginBottom: GAP - 10 },
            ]}
          >
            <BannerSlide imgWidth={dimensions.width * 0.95} />
          </View>
        }
      />
    </>
  );
};

const styles = StyleSheet.create({
  filterBlk: {
    flexDirection: "row",
    backgroundColor: "white",
    padding: 10,
    alignItems: "flex-end",
  },
  actionBtn: {
    color: "black",
    marginStart: 3,
    fontSize: 14,
  },
});

export default memo(ProductListScreen);
