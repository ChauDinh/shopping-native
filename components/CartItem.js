import React from "react";
import { Image, Text, View, StyleSheet, TouchableOpacity } from "react-native";

export default function CartItem({ product }) {
  const { name, img } = product;
  return (
    <View style={styles.container}>
      <Image source={{ uri: `${img}` }} style={styles.img} />
      <View style={styles.productInfo}>
        <Text numberOfLines={1} ellipsizeMode="tail" style={styles.text}>
          {name}
        </Text>
        <View style={styles.quality}>
          <TouchableOpacity style={styles.changeQuality}>
            <Text>-</Text>
          </TouchableOpacity>
          <Text>1</Text>
          <TouchableOpacity style={styles.changeQuality}>
            <Text>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    padding: 16,
    borderRadius: 15,
    backgroundColor: "#fff",
    padding: 16,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 0 }
  },
  img: {
    width: 50,
    height: 65,
    zIndex: 2,
    borderRadius: 5,
    marginRight: 16
  },
  text: {
    flex: 1,
    flexWrap: "wrap"
  },
  productInfo: {
    flexGrow: 1,
    width: 0,
    flex: 1,
    fontWeight: "700",
    display: "flex",
    flexDirection: "column"
  },
  quality: {
    display: "flex",
    flexDirection: "row"
  },
  changeQuality: {
    backgroundColor: "#ced3d9",
    borderRadius: 50,
    paddingHorizontal: 8,
    paddingVertical: 4
  }
});
