import React, { memo } from "react";
import { FlatList, StyleSheet, View } from "react-native";

const AppSwiper = ({ renderItem, keyPicker, data, spacing }) => {
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        horizontal={true}
        pagingEnabled={false}
        showsHorizontalScrollIndicator={false}
        data={data}
        keyExtractor={(item) => item[keyPicker]}
        renderItem={renderItem}
      />
    </View>
  );
};

export default memo(AppSwiper);
