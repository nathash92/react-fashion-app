import { Text } from "@rneui/themed";
import React, { memo } from "react";
import { StyleSheet, View } from "react-native";

const BlockHeader = ({ title, showViewMore, viewMoreClick }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {showViewMore ? (
        <Text style={styles.viewMore} onPress={viewMoreClick}>
          See All
        </Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginBottom: 10,
    alignItems: "flex-end",
  },
  title: {
    fontWeight: "400",
    flexGrow: 1,
    fontSize: 18,
  },
  viewMore: {
    fontSize: 12,
    fontWeight: "600",
  },
});

export default memo(BlockHeader);
