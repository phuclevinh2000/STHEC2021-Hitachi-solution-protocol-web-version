import axios from 'axios';
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from '../../types/cartConstants';

export const addToCart =
  (id: string, qty: number) =>
  async (
    dispatch: (arg0: {
      type: string;
      payload: {
        product: any;
        name: any;
        image: any;
        prices: any;
        countInStock: any;
        qty: number;
      };
    }) => void,
    getState: any
  ) => {
    const { data } = await axios.get(`/api/products/${id}`);
    // console.log(data.prices)
    dispatch({
      type: CART_ADD_ITEM,
      payload: {
        product: data._id,
        name: data.name,
        image: data.image,
        prices: data.prices,
        countInStock: data.countInStock,
        qty,
      },
    });

    localStorage.setItem(
      'cartItems',
      JSON.stringify(getState().cart.cartItems)
    );
  };

export const removeFromCart =
  (id: string) =>
  async (
    dispatch: (arg0: { type: string; payload: string }) => void,
    getState: () => {
      (): any;
      new (): any;
      cart: { (): any; new (): any; cartItems: any };
    }
  ) => {
    dispatch({
      type: CART_REMOVE_ITEM,
      payload: id,
    });

    localStorage.setItem(
      'cartItems',
      JSON.stringify(getState().cart.cartItems)
    );
  };
