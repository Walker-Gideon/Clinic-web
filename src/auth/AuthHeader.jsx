import { LuShield } from "react-icons/lu";

export default function AuthHeader() {
  return (
    <header className="space-y-2 text-center">
      <div className="medium:mb-4 mb-2 flex items-center justify-center space-x-2">
        <div className="medium:p-2 rounded-lg bg-blue-600 p-1">
          <LuShield className="medium:h-6 medium:w-6 h-4 w-4 text-white" />
        </div>
        <h1 className="medium:text-2xl text-xl font-bold text-gray-900">
          MedCare EHR
        </h1>
      </div>
      <p className="medium:text-base text-sm text-gray-600">
        Secure Healthcare Management System
      </p>
    </header>
  );
}
