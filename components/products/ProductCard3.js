import { Image, Text } from "@rneui/themed";
import React, { memo } from "react";
import { StyleSheet, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import appStyles from "../../styles/styles";
import { FONT_FAMILY_BOLD } from "../../constants";

const ProductCard3 = () => {
  return (
    <View style={styles.container}>
      <View style={{ paddingHorizontal: 10, paddingVertical: 10 }}>
        <Image
          resizeMode="contain"
          style={styles.img}
          source={require("../../assets/imgs/product.jpg")}
        />
      </View>
      <View
        style={{ flexGrow: 1, justifyContent: "center", paddingVertical: 10 }}
      >
        {/* TITLE */}
        <Text style={[appStyles.productName, { marginBottom: 10 }]}>
          Anti Aging plus - 150ml
        </Text>

        {/* SHIPPING AND QTY INFO */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "flex-start",
            marginBottom: 5,
          }}
        >
          <View style={[styles.shippingBlk, { flexGrow: 1 }]}>
            <Ionicons name="cube-outline" color="grey" size={15} />
            <Text style={styles.getWithin}> Get within </Text>
            <Text style={styles.getWithinDays}> 3 days </Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={styles.qty}> x 1 Qty </Text>
            <Ionicons style={styles.qtyArrow} name="chevron-down" />
          </View>
        </View>

        {/* VARIANT AND PRICE INFO */}
        <View style={{ flexDirection: "row" }}>
          <View>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.variantLbl}> Color: </Text>
              <Text style={styles.variantVal}> Blue </Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.variantLbl}> Size: </Text>
              <Text style={styles.variantVal}> 8 </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              flexGrow: 1,
              justifyContent: "flex-end",
              alignItems: "flex-end",
            }}
          >
            <Text style={appStyles.productMrp}> Rs.900 </Text>
            <Text style={appStyles.productPrice}> Rs.500 </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "white",
  },
  img: {
    width: 70,
    height: 70,
  },
  shippingBlk: {
    flexDirection: "row",
    alignItems: "center",
  },
  getWithin: {
    fontSize: 12,
    color: "grey",
  },
  getWithinDays: {
    fontSize: 12,
    color: "grey",
    fontWeight: "600",
    fontFamily: FONT_FAMILY_BOLD,
  },
  qty: {
    fontSize: 12,
    color: "grey",
  },
  qtyArrow: {
    backgroundColor: "#dedede",
    padding: 3,
  },
  variantLbl: {
    fontSize: 10,
    color: "grey",
  },
  variantVal: {
    fontSize: 10,
    color: "grey",
    fontWeight: "600",
    fontFamily: FONT_FAMILY_BOLD,
  },
});

export default memo(ProductCard3);
