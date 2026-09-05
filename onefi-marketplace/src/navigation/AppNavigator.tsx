import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import MarketplaceScreen from "../screens/MarketPlaceScreen";
import ProductDetailsScreen from "../screens/ProductDetailsScreen";
import OrderSummaryScreen from "../screens/OrderDetailsScreen"
import OrderSuccessScreen from "../screens/OrderSuccessScreen";
import { RootStackParamList } from "./types";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Marketplace"
    >
      <Stack.Screen
        name="Marketplace"
        component={MarketplaceScreen}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="ProductDetails"
        component={ProductDetailsScreen}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="OrderSummary"
        component={OrderSummaryScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="OrderSuccess"
        component={OrderSuccessScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}