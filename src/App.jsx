import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthLayout from "./auth/AuthLayout";
import { AuthProvider } from "./auth/AuthContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthLayout />,
  },
]);

export default function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />;
    </AuthProvider>
  );
}
