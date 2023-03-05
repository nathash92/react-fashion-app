import Ionicons from "@expo/vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { memo } from "react";
import { StyleSheet } from "react-native";
import AppHeader from "../components/core/AppHeader";

const Tab = createBottomTabNavigator();

const tabIconSize = 26;

const tabs = [
  {
    name: "Homes",
    cmp: () => require("./Home").default,
    icon: "home-outline",
  },
  {
    name: "Menu",
    cmp: () => require("./Home").default,
    icon: "pricetags-outline",
  },
  {
    name: "Category",
    cmp: () => require("./Home").default,
    icon: "apps-outline",
  },
  {
    name: "Carts",
    cmp: () => require("./CartScreen").default,
    icon: "basket-outline",
  },
  {
    name: "Settings",
    cmp: () => require("./Home").default,
    icon: "cut-outline",
  },
];

const MainTabs = () => {
  return (
    <Tab.Navigator>
      {tabs.map((e, k) => (
        <Tab.Screen
          key={k}
          name={e.name}
          getComponent={() => e.cmp()}
          options={{
            header: ({ navigation }) => (
              <AppHeader
                showSearch={true}
                showLogo={true}
                navigation={navigation}
              />
            ),
            tabBarShowLabel: false,
            tabBarStyle: {
              backgroundColor: "white",
              height: 55,
            },
            tabBarIcon: ({ focused }) => (
              <Ionicons
                name={e.icon}
                style={[
                  { paddingVertical: 5 },
                  focused ? styles.activeIcon : {},
                ]}
                size={tabIconSize}
              ></Ionicons>
            ),
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  activeIcon: {
    borderBottomColor: "red",
    borderBottomWidth: 2,
  },
});

export default memo(MainTabs);
