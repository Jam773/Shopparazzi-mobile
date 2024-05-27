import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./src/screens/HomeScreen";
import ExploreScreen from "./src/screens/ExploreScreen";
import ShoppingListScreen from "./src/screens/ShoppingListScreen";
import CartScreen from "./src/screens/CartScreen";
import LoginScreen from "./src/screens/LoginScreen";
import ProductDetailScreen from "./src/screens/ProductDetailScreen";
import BottomNavigation from "./src/components/BottomNavigation";
import WelcomeScreen from "./src/components/WelcomeScreen";
import ComparePriceScreen from "./src/screens/ComparePriceScreen";
import CheckoutScreen from "./src/components/CheckoutScreen";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Product Catalog" component={HomeScreen} />
    <Stack.Screen name="ProductDetail" component={ProductDetailScreen} />
    <Stack.Screen name="ShoppingList" component={ProductDetailScreen} />
    <Stack.Screen name="CheckoutScreen" component={CheckoutScreen} />
    <Stack.Screen name="ComparePrice" component={ComparePriceScreen} />
    <Stack.Screen name="CartScreen" component={CartScreen} />
  </Stack.Navigator>
);

const MainTabNavigator = () => (
  <Tab.Navigator tabBar={(props) => <BottomNavigation {...props} />}>
    <Tab.Screen
      name="Home"
      component={HomeStack}
      options={{
        tabBarLabel: "Home",
        tabBarIcon: "home-outline",
        tabBarIconFocused: "home",
      }}
    />
    <Tab.Screen
      name="Explore"
      component={ExploreScreen}
      options={{
        tabBarLabel: "Explore",
        tabBarIcon: "search-outline",
        tabBarIconFocused: "search",
      }}
    />
    <Tab.Screen
      name="Cart"
      component={CartScreen}
      options={{
        tabBarLabel: "Cart",
        tabBarIcon: "cart-outline",
        tabBarIconFocused: "cart",
      }}
    />
    <Tab.Screen
      name="ShoppingList"
      component={ShoppingListScreen}
      options={{
        tabBarLabel: "ShoppingList",
        tabBarIcon: "heart-outline",
        tabBarIconFocused: "heart",
      }}
    />
    <Tab.Screen
      name="Account"
      component={LoginScreen}
      options={{
        tabBarLabel: "Account",
        tabBarIcon: "person-outline",
        tabBarIconFocused: "person",
      }}
    />
  </Tab.Navigator>
);

const App = () => {
  const [cart, setCart] = useState([]);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="🛍️"
          component={WelcomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Main"
          component={MainTabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ComparePriceScreen"
          component={ComparePriceScreen}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="ProductDetail"
          component={ProductDetailScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Checkout"
          component={CheckoutScreen}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="Cart"
          component={CartScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
