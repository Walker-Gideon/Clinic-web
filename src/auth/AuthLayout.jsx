import { useAuth } from "./AuthContext";
import { LuShield } from "react-icons/lu";
import { LuEye } from "react-icons/lu";
import { LuEyeOff } from "react-icons/lu";
import AuthHeader from "./AuthHeader";
import RoleSelection from "./RoleSelection";
import SignForm from "./SignForm";

export default function AuthLayout() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 via-white to-green-50 p-4">
      <div className="w-full max-w-md space-y-6">
        {/* Header */}
        <AuthHeader />

        {/* Role Selection */}
        <RoleSelection />

        {/* Login Form */}
        {/* </Card> */}
        <SignForm />

        {/* Additional Options */}
        <div className="space-y-2 text-center">
          <button className="text-sm text-blue-600 hover:underline">
            Forgot your password?
          </button>
          <div className="text-xs text-gray-500">
            Need help? Contact your system administrator
          </div>
        </div>

        {/* Security Notice  Card*/}
        <div className="border-yellow-200 bg-yellow-50">
          {/* <CardContent className="pt-4"> */}
          <div className="pt-4">
            <div className="flex items-start space-x-2">
              <LuShield className="mt-0.5 h-4 w-4 text-yellow-600" />
              <div className="text-xs text-yellow-800">
                <p className="mb-1 font-medium">Security Notice</p>
                <p>
                  This system contains confidential patient information
                  protected by HIPAA. Unauthorized access is prohibited.
                </p>
              </div>
            </div>
            {/* </CardContent> */}
          </div>
        </div>
      </div>
    </div>
  );
}
