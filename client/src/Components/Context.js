import React from "react";

const AmountContext = React.createContext({
  count: 0,
  amount: 0,
  setAmount: () => {},
  setCount: () => {},
});

export default AmountContext;
