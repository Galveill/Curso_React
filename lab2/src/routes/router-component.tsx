import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { imgRoutes } from "./routes";
import { AnimalContainer } from "../list/animal-container";

export const RouterComponent = () => {
  return (
    <>
        <BrowserRouter>
          <Routes>
              <Route path={imgRoutes.dogs} element={
                <AnimalContainer name="Perros" animal="dogs"/>
              } />
              <Route path={imgRoutes.cats} element={
                <AnimalContainer name="Gatos" animal="cats"/>
              } />
          </Routes>
        </BrowserRouter>
    </>
  );
};
//Carrito 