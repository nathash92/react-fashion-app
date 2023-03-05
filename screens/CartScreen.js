import { Button, Card } from "@rneui/themed";
import React, { memo } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import CartPriceOverview from "../components/cart/CartPriceOverview";
import CustomerOverview from "../components/cart/CustomerOverview";
import ProductCard3 from "../components/products/ProductCard3";
import { GAP, PAGE_PAD } from "../constants";

const data = [
  { id: 1, name: "Product 1" },
  { id: 2, name: "Product 2" },
  { id: 3, name: "Product 3" },
  { id: 4, name: "Product 4" },
  { id: 5, name: "Product 5" },
];

const CartScreen = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={{ marginBottom: GAP }}>
          <CustomerOverview />
        </View>

        <Card
          containerStyle={{ margin: 0, marginBottom: GAP, borderRadius: 5 }}
        >
          {data.map((e, k) => (
            <View style={k != data.length - 1 ? styles.prdDivider : {}} key={k}>
              <ProductCard3 />
            </View>
          ))}
        </Card>

        <View style={{ marginBottom: GAP }}>
          <CartPriceOverview />
        </View>
      </View>

      <View
        style={{
          marginBottom: GAP,
          flexDirection: "row",
          backgroundColor: "white",
          padding: PAGE_PAD,
        }}
      >
        <View style={{ flex: 1, paddingStart: 1 }}>
          <Button title="Save" type="outline" />
        </View>
        <View style={{ flex: 1, paddingStart: 10 }}>
          <Button title="Make Payment" color="red" />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: PAGE_PAD,
  },
  prdDivider: {
    borderBottomColor: "#dedede",
    borderBottomWidth: 1,
  },
});

export default memo(CartScreen);
