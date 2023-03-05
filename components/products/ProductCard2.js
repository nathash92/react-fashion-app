import Ionicons from "@expo/vector-icons/Ionicons";
import { Card, Text } from "@rneui/themed";
import React, { memo } from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import { FONT_FAMILY_BOLD } from "../../constants";
import appStyles from "../../styles/styles";

const dimensions = Dimensions.get("window");

const ProductCard2 = () => {
  return (
    <Card containerStyle={{ margin: 0, width: dimensions.width * 0.45 }}>
      <Ionicons name="heart" size={16} style={styles.wishlist} />
      <Card.Image
        resizeMode="contain"
        style={{ height: 140, marginBottom: 10 }}
        source={require("../../assets/imgs/product.jpg")}
      />
      <Text style={styles.title} numberOfLines={2}>
        Anti aging cream (pack) - 150ml
      </Text>

      <View style={{ flexDirection: "row", marginBottom: 10 }}>
        <View style={styles.infoBlk}>
          <Text style={styles.infoDesc}>+5 colors</Text>
          <Text style={styles.infoDesc}>Facial</Text>
        </View>
        <View style={styles.priceBlk}>
          <Text style={appStyles.productMrp}> Rs.900 </Text>
          <Text style={appStyles.productPrice}> Rs.500 </Text>
        </View>
      </View>

      <View style={styles.shippingBlk}>
        <Ionicons name="cube-outline" color="grey" size={15} />
        <Text style={styles.getWithin}> Get within </Text>
        <Text style={styles.getWithinDays}> 3 days </Text>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 14,
    fontWeight: "600",
    fontFamily: FONT_FAMILY_BOLD,
    marginBottom: 10,
  },
  infoBlk: {
    flexDirection: "column",
    alignItems: "flex-start",
    flexGrow: 1,
    alignSelf: "center",
  },
  infoDesc: {
    fontSize: 12,
    color: "grey",
  },
  priceBlk: {
    flexDirection: "column",
    alignItems: "flex-end",
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
  wishlist: {
    position: "absolute",
    top: 0,
    right: 0,
    color: "red",
  },
});

export default memo(ProductCard2);
