import { Switch, Text } from "@rneui/themed";
import { memo } from "react";
import { Dimensions, ScrollView, StyleSheet, View } from "react-native";

import BannerSlide from "../components/banner/BannerSlide";
import CategorySlide from "../components/category/CategorySlide";
import BestSellers from "../components/products/BestSellers";
import NewArrivals from "../components/products/NewArrivals";
import { GAP, PAGE_PAD } from "../constants";
import appStyles from "../styles/styles";

const dimensions = Dimensions.get("window");

const Home = () => {
  return (
    <>
      <ScrollView style={[styles.page]}>
        <View style={styles.outlet}>
          <Text style={styles.outletLbl}>Outlet View</Text>
          <Switch style={{ height: 20 }} />
        </View>

        <View
          style={[
            appStyles.mainBannerContainer,
            { paddingRight: PAGE_PAD, marginBottom: GAP },
          ]}
        >
          <BannerSlide imgWidth={dimensions.width * 0.95} />
        </View>

        <View style={{ marginBottom: GAP }}>
          <BestSellers />
        </View>

        <View style={{ marginBottom: GAP }}>
          <CategorySlide />
        </View>

        <View style={{ height: 160, marginBottom: GAP }}>
          <BannerSlide
            imgRounded={true}
            imgWidth={dimensions.width * 0.8}
            spacing={10}
          />
        </View>

        <View style={{ marginBottom: GAP }}>
          <NewArrivals />
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  page: {
    paddingVertical: PAGE_PAD,
    paddingLeft: PAGE_PAD,
  },
  outlet: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    marginBottom: 10,
    paddingHorizontal: PAGE_PAD,
  },
  outletLbl: {
    fontSize: 12,
    fontWeight: "500",
    paddingHorizontal: 10,
  },
});

export default memo(Home);
