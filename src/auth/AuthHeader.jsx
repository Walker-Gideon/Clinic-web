import { LuShield } from "react-icons/lu";

export default function AuthHeader() {
  return (
    <div className="space-y-2 text-center">
      <div className="mb-4 flex items-center justify-center space-x-2">
        <div className="rounded-lg bg-blue-600 p-2">
          <LuShield className="h-6 w-6 text-white" />
        </div>
        <h1 className="text-2xl font-bold text-gray-900">MedCare EHR</h1>
      </div>
      <p className="text-gray-600">Secure Healthcare Management System</p>
    </div>
  );
}
