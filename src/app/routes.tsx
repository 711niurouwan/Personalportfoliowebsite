import { createBrowserRouter, Outlet } from "react-router-dom";
import { GalaxyHome } from "./pages/GalaxyHome";
import { SketchbookLayout } from "./components/SketchbookLayout";
import { Projects } from "./pages/Projects";
import { ProjectDetail } from "./pages/ProjectDetail";
import { KnowledgeGraph } from "./components/KnowledgeGraph/KnowledgeGraph";
// Ensure Journal is imported if you're using it, or just use Projects/SketchbookLayout
// import { Journal } from "./pages/Journal"; 

function RootLayout() {
  return (
    <>
      {/* Background Layer stays consistent across all pages */}
      <div style={{ position: "fixed", inset: 0, zIndex: 0 }}>
        <KnowledgeGraph />
      </div>
      {/* This is where GalaxyHome or Journal/Projects will render */}
      <Outlet />
    </>
  );
}

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <RootLayout />, // Use 'element' for the wrapper
      children: [
        {
          index: true,
          element: <GalaxyHome />, // The default view at "/"
        },
        {
          path: "home",
          element: <GalaxyHome />,
        },
        {
          path: "journal", // No leading slash needed in children
          element: <SketchbookLayout />,
          children: [
            {
              index: true,
              element: <Projects />, // The view at "/journal"
            },
            {
              path: ":projectId",
              element: <ProjectDetail />,
            },
          ],
        },
      ],
    },
  ],
  {
    basename: import.meta.env.BASE_URL,
  }
);