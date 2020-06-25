import axios from "axios";
import { FETCH_PRODUCTS } from "./types";

export const fetchProducts = () => async dispatch => {
  try {
    const res = await axios(
      "https://offshoredisguisedlinuxkernel--cuonhbui.repl.co/api/products/"
    );
    dispatch({
      type: FETCH_PRODUCTS,
      payload: res.data.products
    });
  } catch (err) {
    console.log(err.message);
  }
};
