import { Card, Image, Text } from "@rneui/themed";
import React, { memo } from "react";
import { View } from "react-native";

const ProductCard = () => {
  return (
    <Card containerStyle={{ margin: 0, borderRadius: 5 }}>
      <View style={{ alignItems: "center", padding: 5 }}>
        <Image
          style={{
            width: 120,
            height: 120,
            resizeMode: "contain",
            marginBottom: 10,
          }}
          source={require("../../assets/imgs/product.jpeg")}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "flex-end",
          flexWrap: "wrap",
          marginBottom: 10,
        }}
      >
        <Text
          numberOfLines={2}
          style={{ fontSize: 14, flex: 1, marginRight: 3 }}
        >
          Anti Aging Kit - 150ml
        </Text>
        <Text
          style={{
            fontSize: 12,
            color: "grey",
            textDecorationLine: "line-through",
          }}
        >
          Rs.500
        </Text>
      </View>
      <View style={{ flexDirection: "row", alignItems: "flex-end" }}>
        <Text
          numberOfLines={1}
          style={{ flex: 1, color: "grey", fontSize: 13 }}
        >
          Facial
        </Text>
        <Text style={{ fontSize: 18, color: "red" }}>Rs.120</Text>
      </View>
    </Card>
  );
};

export default memo(ProductCard);
