import React from "react";
import Total from "./Total/Total";
import CheckoutFeature from "./CheckoutFeature/CheckoutFeature";

function Checkout(props) {
  return (
    <section className="main__summary">
      <h3>NEW GREENLEAF 2018</h3>
      <CheckoutFeature selected={props.selected} />
      <Total selected={props.selected} />
    </section>
  );
}

export default Checkout;
