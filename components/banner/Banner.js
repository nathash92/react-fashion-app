import { Image } from "@rneui/themed";
import React, { memo } from "react";
import { Dimensions, StyleSheet } from "react-native";

const dimensions = Dimensions.get("window");

const Banner = ({ imgPath, imgWidth, spacing, imgRounded }) => {
  return (
    <Image
      style={{
        width: imgWidth,
        marginRight: spacing || 0,
        resizeMode: "cover",
        borderRadius: imgRounded ? 10 : 0,
      }}
      source={require("../../assets/imgs/banner.jpeg")}
    />
  );
};

export default memo(Banner);
