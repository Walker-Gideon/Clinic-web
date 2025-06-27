import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthLayout from "./auth/AuthLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthLayout />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
