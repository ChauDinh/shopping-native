import React from "react";
import { Image, Text, View, StyleSheet } from "react-native";

export default function Categories(props) {
  const { category } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{category.name}</Text>
      <Image source={category.img} style={styles.categoryImage}></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 16,
    borderRadius: 5,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 0 },
    marginBottom: 16
  },
  categoryImage: {
    width: 64,
    height: 64
  },
  title: {
    textTransform: "uppercase",
    marginBottom: 8,
    fontWeight: "700"
  }
});
