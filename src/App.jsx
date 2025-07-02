import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthLayout from "./auth/AuthLayout";
import { AuthProvider } from "./auth/AuthContext";
import PatientLayout from "./features/patient/PatientLayout";
import NurseLayout from "./features/nurse/NurseLayout";
import DoctorLayout from "./features/doctor/DoctorLayout";
import AdminLayout from "./features/admin/AdminLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthLayout />,
  },
  {
    path: "/patient",
    element: <PatientLayout />,
    children: [],
  },
  {
    path: "/nurse",
    element: <NurseLayout />,
    children: [],
  },
  {
    path: "/doctor",
    element: <DoctorLayout />,
    children: [],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [],
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
