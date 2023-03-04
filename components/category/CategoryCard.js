import { Card, Text } from "@rneui/themed";
import { LinearGradient } from "expo-linear-gradient";
import React, { memo } from "react";
import { ImageBackground, View } from "react-native";

const CategoryCard = () => {
  return (
    <Card
      containerStyle={{
        margin: 0,
        borderRadius: 5,
        padding: 0,
        height: "100%",
        overflow: "hidden",
      }}
    >
      <ImageBackground
        resizeMode="cover"
        style={{ height: 160 }}
        source={require("../../assets/imgs/category.jpg")}
      >
        <LinearGradient
          colors={["transparent", "rgb(25,25,25)"]}
          style={{ flex: 1, justifyContent: "flex-end", padding: 10 }}
        >
          <View
            style={{
              alignItems: "flex-end",
              marginBottom: 5,
            }}
          >
            <Text
              style={{
                fontSize: 20,
                fontWeight: "600",
                color: "white",
              }}
            >
              Track Pant
            </Text>
            <Text style={{ color: "white", fontWeight: "500", fontSize: 12 }}>
              Starts From
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "flex-end",
            }}
          >
            <Text
              style={{
                flexGrow: 1,
                fontSize: 12,
                color: "white",
                fontWeight: "500",
              }}
            >
              450+ items
            </Text>
            <Text style={{ color: "red", fontSize: 18, fontWeight: "800" }}>
              Rs.400
            </Text>
          </View>
        </LinearGradient>
      </ImageBackground>
    </Card>
  );
};

export default memo(CategoryCard);
