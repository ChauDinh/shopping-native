import React from "react";
import { StyleSheet, View } from "react-native";

import CategoryItem from "./components/CategoryItem";

export default function App() {
  return (
    <View style={styles.container}>
      <CategoryItem />
      <CategoryItem />
      <CategoryItem />
      <CategoryItem />
      <CategoryItem />
      <CategoryItem />
      <CategoryItem />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "stretch",
    justifyContent: "center",
    paddingLeft: 16,
    paddingRight: 16
  }
});
