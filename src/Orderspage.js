import React from "react";
import "./Orderspage.css";
// import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";

function Orderspage() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="orderspage">
      

        <div>
          <h3>Hello, {user?.email}</h3>
          <h2 className="checkout__title">Your Order has been confirmed! Thank you for shopping with Add To Cart! </h2>

          {basket.map(item => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}

        
      </div>

    </div>
  );
}

export default Orderspage;
