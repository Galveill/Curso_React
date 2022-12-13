import React from "react";
import { ImgContextProvider } from "./provider/img-context";
import { AnimalContextProvider } from "./provider/animal-context";
import { RouterComponent } from "./routes/router-component";
import { CartContainer } from "./shop/cart-container";
import "./assets/css/styles.css";

export const App = () => {
  return (
    <div className="container">
      <ImgContextProvider>
        <AnimalContextProvider>
          <RouterComponent/>
          <CartContainer/>
        </AnimalContextProvider>
      </ImgContextProvider>
    </div>
  );
};
