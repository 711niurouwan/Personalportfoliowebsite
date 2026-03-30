import { createBrowserRouter, Outlet } from "react-router-dom";
import { GalaxyHome } from "./pages/GalaxyHome";
import { SketchbookLayout } from "./components/SketchbookLayout";
import { Projects } from "./pages/Projects";
import { KnowledgeGraph } from "./components/KnowledgeGraph/KnowledgeGraph";

function RootLayout() {
  return (
    <>
      <div style={{ position: "fixed", inset: 0, zIndex: -1 }}>
        <KnowledgeGraph />
      </div>
      <Outlet />
    </>
  );
}

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: GalaxyHome },
      {
        path: "/journal",
        Component: SketchbookLayout,
        children: [{ index: true, Component: Projects }],
      },
    ],
  },
]);
