import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Remove loading state once React is ready
document.documentElement.classList.remove('loading');

createRoot(document.getElementById("root")!).render(<App />);
