import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

import Categories from "../screens/Categories";
import Category from "../screens/Category";
import Cart from "../screens/Cart";
import Order from "../screens/Order";
import Setting from "../screens/Setting";

const color = {
  ACTIVE: "#147efb",
  INACTIVE: "#ccc"
};

const CategoryStack = createStackNavigator({
  Categories,
  Category
});
CategoryStack.navigationOptions = {
  tabBarLabel: "Home",
  tabBarIcon: ({ focused }) => {
    return (
      <Ionicons
        name="ios-home"
        size={25}
        color={focused ? color.ACTIVE : color.INACTIVE}
      />
    );
  }
};

const CartStack = createStackNavigator({
  Cart
});
CartStack.navigationOptions = {
  tabBarLabel: "Cart",
  tabBarIcon: ({ focused }) => {
    return (
      <Ionicons
        name="ios-cart"
        size={25}
        color={focused ? color.ACTIVE : color.INACTIVE}
      />
    );
  }
};

const OrderStack = createStackNavigator({
  Order
});
OrderStack.navigationOptions = {
  tabBarLabel: "Orders",
  tabBarIcon: ({ focused }) => {
    return (
      <Ionicons
        name="ios-cube"
        size={25}
        color={focused ? color.ACTIVE : color.INACTIVE}
      />
    );
  }
};

const SettingStack = createStackNavigator({
  Setting
});
SettingStack.navigationOptions = {
  tabBarLabel: "Settings",
  tabBarIcon: ({ focused }) => {
    return (
      <Ionicons
        name="ios-settings"
        size={25}
        color={focused ? color.ACTIVE : color.INACTIVE}
      />
    );
  }
};

const AppNavigator = createBottomTabNavigator({
  CategoryStack,
  CartStack,
  OrderStack,
  SettingStack
});

export default AppNavigator;
