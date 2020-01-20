import React from "react";
import { createAppContainer } from "react-navigation";
import "react-native-gesture-handler";

import AppNavigator from "./utils/AppNavigator";

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
