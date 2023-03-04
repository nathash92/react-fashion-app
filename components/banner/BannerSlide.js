import React, { memo, useState } from "react";
import { StyleSheet, View } from "react-native";
import AppSwiper from "../core/AppSwiper";
import Banner from "./Banner";

const BannerSlide = ({ imgWidth, spacing, imgRounded }) => {
  const [banners] = useState([
    {
      img: "banner.jpeg",
      id: 0,
    },
    {
      img: "banner.jpeg",
      id: 1,
    },
    {
      img: "banner.jpeg",
      id: 2,
    },
    {
      img: "banner.jpeg",
      id: 3,
    },
  ]);

  return (
    <View style={styles.rounded}>
      <AppSwiper
        renderItem={({ item }) => (
          <Banner
            imgPath={item.img}
            imgWidth={imgWidth}
            spacing={spacing}
            imgRounded={imgRounded}
          />
        )}
        keyPicker="id"
        data={banners}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  rounded: {
    flex: 1,
    borderRadius: 10,
    overflow: "hidden",
  },
});

export default memo(BannerSlide);
