import { generatePath } from "react-router-dom";

interface OrgRoutes {
  root: string;
  details: string;
}

//Rutas
export const orgRoutes: OrgRoutes = {
  root: "/",
  details: "/detail/:id"
};


interface Routes extends Omit<OrgRoutes, "details"> {
  details: (id: string) => string;
}

export const routes: Routes = {
  ...orgRoutes,
  details: (id) => generatePath(orgRoutes.details, { id }),
};
