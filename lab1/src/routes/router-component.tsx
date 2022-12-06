import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { orgRoutes } from "./routes";
import { ListContainer } from "../list/list-container";
import { DetailContainer } from "../detail/detail-container";

export const RouterComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={orgRoutes.root} element={<ListContainer />} />
        <Route path={orgRoutes.details} element={<DetailContainer />} />
      </Routes>
    </BrowserRouter>
  );
};
