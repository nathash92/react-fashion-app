import { StyleSheet } from "react-native";

import { FONT_FAMILY_BOLD } from "../constants";

const appStyles = StyleSheet.create({
  mainBannerContainer: {
    height: 120,
  },
  productName: {
    fontFamily: 14,
    fontWeight: "600",
    fontFamily: FONT_FAMILY_BOLD,
  },
  productMrp: {
    fontSize: 12,
    color: "grey",
    textDecorationLine: "line-through",
  },
  productPrice: {
    fontSize: 16,
    fontWeight: "600",
    fontFamily: FONT_FAMILY_BOLD,
    color: "red",
  },
});

export default appStyles;
