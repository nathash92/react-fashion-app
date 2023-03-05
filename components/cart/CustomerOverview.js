import { Card, Text } from "@rneui/themed";
import React, { memo } from "react";
import { StyleSheet, View } from "react-native";
import { FONT_FAMILY_BOLD } from "../../constants";
import Ionicons from "@expo/vector-icons/Ionicons";

const CustomerOverview = () => {
  return (
    <Card containerStyle={{ margin: 0, borderRadius: 5 }}>
      <View style={{ flexDirection: "row" }}>
        <Card.Image
          style={styles.profileImg}
          source={{ uri: "https://i.pravatar.cc/150?img=12" }}
        />
        <View style={{ flex: 1 }}>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text style={styles.name}>Sammuel</Text>
            <View style={{ marginBottom: 10 }}>
              <Text style={[styles.name, { marginBottom: 5 }]}>1234567890</Text>
              <Text style={styles.time}>
                <Ionicons name="time-outline" />
                <Text>08:00 am, 3pm</Text>
              </Text>
            </View>
          </View>
          <Card.Divider />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text>
              <Ionicons name="hand-right-outline" color="grey" size={16} />
              <Text style={{ color: "green" }}>Rs.100</Text>
            </Text>
            <Text style={{ color: "red", fontSize: 20 }}>Rs.4000</Text>
          </View>
        </View>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  profileImg: {
    width: 40,
    borderRadius: 50,
    height: 40,
    marginHorizontal: 5,
  },
  name: {
    fontSize: 14,
    fontWeight: "600",
    fontFamily: FONT_FAMILY_BOLD,
  },
  time: {
    fontSize: 12,
    color: "grey",
  },
});

export default memo(CustomerOverview);
