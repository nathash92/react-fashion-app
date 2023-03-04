import { Text } from "@rneui/themed";
import React, { memo } from "react";
import { View } from "react-native";

const BlockHeader = ({ title, showViewMore, viewMoreClick }) => {
  return (
    <View style={{ flexDirection: "row", marginBottom: 10 }}>
      <Text style={{ flex: 1, fontSize: 16 }}>{title}</Text>
      {showViewMore ? <Text onPress={viewMoreClick}>See All</Text> : null}
    </View>
  );
};

export default memo(BlockHeader);
