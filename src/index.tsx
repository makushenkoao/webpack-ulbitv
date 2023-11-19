import { createRoot } from "react-dom/client";
import App from "./App";

const root = document.getElementById("root");

if (!root) {
  throw new Error("Root Not Found!");
}

const container = createRoot(root);

container.render(<App />);
