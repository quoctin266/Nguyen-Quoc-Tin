import { createBrowserRouter, RouterProvider } from "react-router";
import HomePage from "../../pages/home/page";
import RootLayout from "../../pages/layout";
import CurrenciesPage from "../../pages/currencies/page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/currencies",
        element: <CurrenciesPage />,
      },
    ],
  },
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
