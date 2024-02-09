import { createContext } from "react";

export const CartContext = createContext({
  //it's help with autocompletion
  items: [],
  addItemToCart: () => {},
});
