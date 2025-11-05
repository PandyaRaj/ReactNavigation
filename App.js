import React, { useLayoutEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CategoriesScreen from "./screens/CategoriesScreen";
import MealsOverviewScreen from "./screens/MealsOverViewScreen";
import MeanDeatailscreen from "./screens/MeanDeatailscreen";
import { Text } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import FavoriteScreen from "./screens/FavoriteScreen";
//import FavoriteContextProvider from "./store/context/favorite-context";
import store from "./store/redux/store";
import { Provider } from "react-redux";
const Stack = createNativeStackNavigator(); // ✅ notice the parentheses!
const Drawer = createDrawerNavigator();
function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerContentStyle: {
          backgroundColor: "#421e08", // drawer background color
        },
        drawerActiveBackgroundColor: "#805e49ff",
        drawerInactiveBackgroundColor: "#421e08",
        drawerActiveTintColor: "white",
        drawerInactiveTintColor: "white",
        headerStyle: {
          backgroundColor: "#421e08", // header background color
        },
        sceneContainerStyle: {
          backgroundColor: "#5f3a23", // screen background color
        },
        headerTintColor: "white", // text color
        headerTitleStyle: {
          fontWeight: "bold",
          fontSize: 20,
        },
        headerTitleAlign: "center", // ✅ centers the title
      }}
    >
      <Drawer.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: "All Categories",
          drawerIcon: ({ color, size }) => (
            <Text style={{ color: color, fontSize: size }}>🍔</Text>
          ),
        }}
      />
      <Drawer.Screen 
        name="Favorites"
        component={FavoriteScreen}
        options={{
          title: "Your Favorites",
          drawerIcon: ({ color, size }) => (
            <Text style={{ color: color, fontSize: size }}>⭐</Text>
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      {/* <FavoriteContextProvider> */}
      <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: "#421e08ff", // background color
              alignItems: "center", // centering the header
            },
            contentStyle: {
              backgroundColor: "#5f3a23ff", // screen background color
            },
            headerTintColor: "white", // text color
            headerTitleStyle: {
              fontWeight: "bold", // optional styling
              fontSize: 20,
            },
          }}
        >
          <Stack.Screen
            name="Drawer"
            options={{
              headerShown: false,
            }}
            component={DrawerNavigator}
          />
          <Stack.Screen
            name="MealsOverviewScreen"
            component={MealsOverviewScreen}
          />
          <Stack.Screen
            name="MeanDeatailscreen"
            options={{ title: "About the Meal" }}
            component={MeanDeatailscreen}
          ></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer></Provider>
      {/* </FavoriteContextProvider> */}
    </>
  );
}
