import { createRoot } from "react-dom/client";
import App from "./app/App.tsx"; 
import "./styles/index.css";
import { GlobalProvider } from './context/GlobalState';

createRoot(document.getElementById("root")!).render(
  <GlobalProvider>
    <App />
  </GlobalProvider>
);