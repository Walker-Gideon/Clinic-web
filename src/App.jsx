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
      <div className="bg-gradient-to-br from-blue-50 via-white to-green-50">
        <RouterProvider router={router} />;
      </div>
    </AuthProvider>
  );
}
