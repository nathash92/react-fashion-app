import { Header, Image, Text } from "@rneui/themed";
import React, { memo } from "react";

import Ionicons from "@expo/vector-icons/Ionicons";
import { Pressable, StyleSheet, View } from "react-native";
import { FONT_FAMILY_BOLD } from "../../constants";

const TitleSection = ({ title, subTitle }) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      {subTitle ? <Text style={styles.subTitle}>{subTitle}</Text> : null}
    </View>
  );
};

const ActionIcon = ({ icon, count, rightGap = 0, redirect, navigation }) => {
  return (
    <View style={{ marginRight: rightGap || 0 }}>
      {count > 0 ? <Text style={styles.actionIconCount}>{count}</Text> : null}
      <Pressable
        onPress={() => {
          if (redirect && redirect.name) {
            navigation.navigate(redirect.name);
          }
        }}
      >
        <Ionicons name={icon} size={26} />
      </Pressable>
    </View>
  );
};

const AppHeader = ({
  showSearch = false,
  showLogo = false,
  hasBack,
  title,
  subTitle = "",
  navigation,
}) => {
  return (
    <Header
      leftComponent={
        <>
          {hasBack ? (
            <Pressable onPress={() => navigation.goBack()}>
              <Ionicons
                name="arrow-back"
                size={28}
                style={{ alignSelf: "center" }}
              />
            </Pressable>
          ) : null}
          {showLogo ? (
            <View>
              <Image
                style={styles.logo}
                source={require("../../assets/imgs/logo.png")}
              />
            </View>
          ) : null}
        </>
      }
      containerStyle={{
        backgroundColor: "transparent",
      }}
      placement="left"
      centerContainerStyle={styles.container}
      centerComponent={
        <>
          {/* TITLE */}
          {title ? <TitleSection title={title} subTitle={subTitle} /> : null}

          {/* SEARCH BAR STATIC */}
          {showSearch ? (
            <View style={styles.searchInp}>
              <Text style={styles.searchInpPlaceholder}>Search</Text>
              <Ionicons
                name="search-outline"
                size={18}
                style={styles.searchInpIcon}
              />
            </View>
          ) : null}
        </>
      }
      rightContainerStyle={{
        alignSelf: "center",
      }}
      rightComponent={
        <View style={{ flexDirection: "row" }}>
          <ActionIcon icon="notifications-outline" rightGap={10} />
          <ActionIcon
            icon="cart-outline"
            count={5}
            redirect={{ name: "Cart" }}
            navigation={navigation}
          />
        </View>
      }
    />
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    fontFamily: FONT_FAMILY_BOLD,
  },
  subTitle: {
    fontSize: 12,
  },
  logo: {
    height: 50,
    width: 50,
  },
  searchInp: {
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 15,
    width: "100%",
    height: 40,
    paddingVertical: 10,
    paddingHorizontal: 15,
    alignItems: "center",
  },
  searchInpPlaceholder: { flexGrow: 1, color: "grey" },
  searchInpIcon: { color: "grey" },
  actionIconCount: {
    backgroundColor: "red",
    borderRadius: 5,
    fontSize: 11,
    color: "white",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: -8,
    right: -3,
    paddingHorizontal: 5,
    paddingVertical: 2,
    zIndex: 9,
  },
});

export default memo(AppHeader);
