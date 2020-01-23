import React from "react";
import { createAppContainer } from "react-navigation";
import "react-native-gesture-handler";
import axios from "axios";

import AppNavigator from "./utils/AppNavigator";
import { CartProvider } from "./context/Cart";

axios.defaults.baseURL = "https://6d993b9a.ngrok.io";

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return (
      <CartProvider>
        <AppContainer />
      </CartProvider>
    );
  }
}
