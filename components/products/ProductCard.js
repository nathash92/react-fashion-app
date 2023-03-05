import Ionicons from "@expo/vector-icons/Ionicons";
import { Card, Text } from "@rneui/themed";
import React, { memo } from "react";
import { StyleSheet, View } from "react-native";
import appStyles from "../../styles/styles";

const ProductCard = () => {
  return (
    <Card containerStyle={{ margin: 0, borderRadius: 5, width: "100%" }}>
      <Ionicons name="heart" size={16} style={styles.wishlist} />
      <View style={{ padding: 5 }}>
        <Card.Image
          style={{
            width: "100%",
            height: 120,
            resizeMode: "center",
            marginBottom: 10,
          }}
          source={require("../../assets/imgs/product.jpg")}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "flex-end",
        }}
      >
        <Text numberOfLines={2} style={appStyles.productName}>
          Anti Aging Kit - 150ml
        </Text>
      </View>
      <View style={{ flexDirection: "row", alignItems: "flex-end" }}>
        <Text numberOfLines={1} style={{ color: "grey", fontSize: 13 }}>
          Facial
        </Text>
        <View style={{ alignItems: "flex-end", flexGrow: 1 }}>
          <Text style={appStyles.productMrp}>Rs.500</Text>
          <Text style={appStyles.productPrice}>Rs.120</Text>
        </View>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  wishlist: {
    position: "absolute",
    top: 0,
    right: 0,
    color: "red",
  },
});

export default memo(ProductCard);
