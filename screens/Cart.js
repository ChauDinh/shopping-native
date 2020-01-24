import React from "react";
import { FlatList, View, StyleSheet } from "react-native";

import { CartContext } from "../context/Cart";
import CartItem from "../components/CartItem";

export default class CartScreen extends React.Component {
  static navigationOptions = {
    title: "Cart"
  };

  render() {
    return (
      <CartContext.Consumer>
        {({ cartItems }) => (
          <View>
            <FlatList
              data={cartItems}
              renderItem={({ item }) => <CartItem product={item} />}
              keyExtractor={item => `${item.id}`}
              contentContainerStyle={styles.container}
            ></FlatList>
          </View>
        )}
      </CartContext.Consumer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 16,
    paddingLeft: 16,
    paddingRight: 16
  }
});
