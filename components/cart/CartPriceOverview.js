import { Card, Text } from "@rneui/themed";
import React, { memo } from "react";
import { StyleSheet, View } from "react-native";
import { FONT_FAMILY_BOLD, FONT_FAMILY_EXTRABOLD } from "../../constants";

const CartPriceOverview = () => {
  return (
    <Card containerStyle={{ margin: 0 }}>
      <Text style={{ marginBottom: 10 }}>
        <Text style={styles.header}>PRICE DETAILS</Text>
        <Text style={{ fontSize: 12 }}> (4 items) </Text>
      </Text>
      <View style={styles.row}>
        <Text style={styles.txt}>Sub Total</Text>
        <Text style={styles.val}>Rs.400</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.txt}>Discount</Text>
        <Text style={[styles.val, { color: "green" }]}> - Rs.400</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.txt}>Coupon Discount</Text>
        <Text style={[styles.val, { color: "red" }]}>Apply Coupon</Text>
      </View>
      <View style={[styles.row, { marginBottom: 10 }]}>
        <Text style={styles.txt}>Convenience Fee</Text>
        <Text style={styles.val}>Rs.400</Text>
      </View>
      <Card.Divider></Card.Divider>
      <View style={[styles.row, { marginBottom: 10 }]}>
        <Text style={styles.totalTxt}>Total Amount </Text>
        <Text style={styles.total}>Rs.400</Text>
      </View>
      <View style={styles.row}>
        <Text style={{ fontSize: 16 }}>Customer Savings: </Text>
        <Text style={{ fontSize: 16, color: "green" }}> Rs.300 </Text>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 14,
    fontWeight: "600",
    fontFamily: FONT_FAMILY_BOLD,
    textDecorationLine: "underline",
  },
  row: {
    flexDirection: "row",
    marginBottom: 5,
  },
  txt: {
    fontSize: 14,
  },
  val: {
    fontSize: 14,
    flexGrow: 1,
    textAlign: "right",
  },
  totalTxt: {
    fontWeight: "600",
    fontFamily: FONT_FAMILY_EXTRABOLD,
    fontSize: 16,
  },
  total: {
    fontWeight: "600",
    fontFamily: FONT_FAMILY_EXTRABOLD,
    fontSize: 16,
    flexGrow: 1,
    textAlign: "right",
  },
});

export default memo(CartPriceOverview);
