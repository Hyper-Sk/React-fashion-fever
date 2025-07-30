import { createContext, useState } from "react";

export const AppContext = createContext(null);

// use Async function when it is api
import { data } from "./../products/data";
import { toast } from "react-toastify";

export const AppProvider = (props) => {
  const [showAside, setShowAside] = useState(false);
  const [allProducts, setAllProducts] = useState(data);
  const [info, setInfo] = useState("DESC");
  const [currency, setCurrency] = useState("$");
  const [cartItems, SetCartItems] = useState({});
  const [shippingFee,setShippingFee] = useState(3)

  // console.log(allProducts)

  const addToCart = async (id, size) => {
    if (!size) {
      toast.error("Please select the size");
      return;
    }
    let cartClone = structuredClone(cartItems);
    if (cartClone[id]) {
      if (cartClone[id][size]) {
        cartClone[id][size] += 1;
      } else {
        cartClone[id][size] = 1;
      }
    } else {
      cartClone[id] = {};
      cartClone[id][size] = 1;
    }
    SetCartItems(cartClone);
  };


  function sumAllNestedValues(obj) {
    let total = 0;
    for (const key in obj) {
      const nested = obj[key];
      for (const size in nested) {
        total += nested[size];
      }
    }

    return total;
  }


  let cartTotal = sumAllNestedValues(cartItems);


  const state = {
    currency,
    allProducts,
    showAside,
    setShowAside,
    info,
    setInfo,
    addToCart,
    cartItems,
    cartTotal,
    shippingFee
  };

  return (
    <AppContext.Provider value={state}>{props.children}</AppContext.Provider>
  );
};
