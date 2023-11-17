import { createRoot } from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Suspense } from "react";
import { AboutPage } from "@/pages/about";
import { ShopPage } from "@/pages/shop";

const root = document.getElementById("root");

if (!root) {
  throw new Error("Root Not Found!");
}

const container = createRoot(root);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/about",
        element: (
          <Suspense fallback="Loading...">
            <AboutPage />
          </Suspense>
        ),
      },
      {
        path: "/shop",
        element: (
          <Suspense fallback="Loading...">
            <ShopPage />
          </Suspense>
        ),
      },
    ],
  },
]);

container.render(<RouterProvider router={router} />);
