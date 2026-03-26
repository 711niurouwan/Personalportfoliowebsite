import { createBrowserRouter } from "react-router";
import { GalaxyHome } from "./pages/GalaxyHome";
import { SketchbookLayout } from "./components/SketchbookLayout";
import { Projects } from "./pages/Projects";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: GalaxyHome,
  },
  {
    path: "/journal",
    Component: SketchbookLayout,
    children: [
      { index: true, Component: Projects },
    ],
  },
]);
