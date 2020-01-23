import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { CartContext } from "../context/Cart";

export default function ProductItem(props) {
  const { product } = props;

  return (
    <View style={styles.shadow}>
      <View style={styles.container}>
        <Image style={styles.img} source={{ uri: `${product.img}` }} />
        <View style={styles.info}>
          <Text style={styles.name}>{product.name}</Text>
          <View style={styles.priceRow}>
            <Text style={styles.price}>500K</Text>
            <CartContext.Consumer>
              {({ onAddToCart }) => (
                <TouchableOpacity onPress={() => onAddToCart(product.name)}>
                  <Text style={styles.buyButton}>BUY +</Text>
                </TouchableOpacity>
              )}
            </CartContext.Consumer>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 0 }
  },
  container: {
    marginBottom: 20,
    borderRadius: 10,
    backgroundColor: "#fff",
    overflow: "hidden"
  },
  img: {
    height: 150,
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4
  },
  info: {
    padding: 8
  },
  name: {
    fontSize: 16,
    marginBottom: 8
  },
  priceRow: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },
  price: {
    fontSize: 16,
    color: "#888",
    flex: 1
  },
  buyButton: {
    textTransform: "uppercase",
    fontSize: 16,
    color: "#2f95dc"
  }
});
