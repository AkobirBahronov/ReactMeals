import React from "react";

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  remove: (id) => {},
  clearCart: () => {},
});

export default CartContext;
