import React from "react";
import { RouterComponent } from "./routes/router-component";
import { OrgContextProvider } from "./provider/org-context"
import "./styles.css";

export const App = () => {
  return (
    <OrgContextProvider>
      <RouterComponent/>
    </OrgContextProvider>
  );
};
