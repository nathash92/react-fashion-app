import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useFonts } from "expo-font";
import { ActivityIndicator, View } from "react-native";
import { ThemeProvider } from "@rneui/themed";
import appTheme from "./styles/theme";
import AppHeader from "./components/core/AppHeader";

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    NunitoSans: require("./assets/fonts/NunitoSans/NunitoSans-Regular.ttf"),
    "NunitoSans-SemiBold": require("./assets/fonts/NunitoSans/NunitoSans-SemiBold.ttf"),
    "NunitoSans-Bold": require("./assets/fonts/NunitoSans/NunitoSans-Bold.ttf"),
    "NunitoSans-ExtraBold": require("./assets/fonts/NunitoSans/NunitoSans-ExtraBold.ttf"),
  });

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <ThemeProvider theme={appTheme}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              header: ({ back, navigation, options }) => (
                <AppHeader
                  navigation={navigation}
                  hasBack={back}
                  title={options.title}
                  subTitle={options.subTitle}
                />
              ),
            }}
          >
            {/* MAIN TABS SCREEN */}
            <Stack.Screen
              options={{
                headerShown: false,
              }}
              name="Home"
              getComponent={() => require("./screens/MainTabs").default}
            />

            {/* PRODUCT LIST SCREEN */}
            <Stack.Screen
              name="ProductList"
              getComponent={() =>
                require("./screens/ProductListScreen").default
              }
            />

            {/* CART SCREEN */}
            <Stack.Screen
              name="Cart"
              options={{
                title: "Cart",
              }}
              getComponent={() => require("./screens/CartScreen").default}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </ThemeProvider>
  );
}
