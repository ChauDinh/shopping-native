import React from "react";

export const CartContext = React.createContext();

export class CartProvider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cartItems: []
      /**
       * cartItems: item {name: , quality:}
       */
    };

    this.onAddToCart = this.onAddToCart.bind(this);
  }

  onAddToCart(product) {
    console.log("adding to cart", product);
    this.setState({
      cartItems: this.state.cartItems.concat(product)
    });
  }

  onRemoveFromCart(product) {
    console.log("removing to cart", product);
    this.setState({
      cartItems: this.state.cartItems.filter(item => item.name !== product.name)
    });
  }

  onGetToTal() {
    return this.state.cartItems.reduce((a, b) => a.price + b.price);
  }

  render() {
    return (
      <CartContext.Provider
        value={{
          cartItems: this.state.cartItems,
          onAddToCart: this.onAddToCart
        }}
      >
        {this.props.children}
      </CartContext.Provider>
    );
  }
}

/**
 * Provider
 * cartItems: [item1, item2, ...]; item: {name: , quality: }
 * addToCart(product);
 * removeFromCart(product);
 * getTotal()
 *
 * Consumer
 */
