import { useState } from "react";
import { LuShield } from "react-icons/lu";
import { LuEye } from "react-icons/lu";
import { LuEyeOff } from "react-icons/lu";
import { LuHeart } from "react-icons/lu";
import { LuUser } from "react-icons/lu";
import { LuSettings } from "react-icons/lu";
import { LuStethoscope } from "react-icons/lu";
import { Form } from "react-router-dom";

const roles = [
  {
    id: "patient",
    label: "Patient",
    icon: LuUser,
    description: "Access your medical records and appointments",
    color: "bg-blue-50 text-blue-700 border-blue-200",
  },
  {
    id: "nurse",
    label: "Nurse",
    icon: LuHeart,
    description: "Patient care and medical documentation",
    color: "bg-green-50 text-green-700 border-green-200",
  },
  {
    id: "doctor",
    label: "Doctor",
    icon: LuStethoscope,
    description: "Full patient management and diagnosis",
    color: "bg-purple-50 text-purple-700 border-purple-200",
  },
  {
    id: "admin",
    label: "Administrator",
    icon: LuSettings,
    description: "System administration and user management",
    color: "bg-orange-50 text-orange-700 border-orange-200",
  },
];

export default function AuthLayout() {
  const [selectedRole, setSelectedRole] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password || !selectedRole) {
      setError("Please fill in all fields and select a role");
      return;
    }

    setIsLoading(true);

    // Simulate authentication
    setTimeout(() => {
      setIsLoading(false);
      // In a real app, this would redirect based on role
      alert(`Login successful as ${selectedRole}`);
    }, 2000);
  };

  const selectedRoleData = roles.find((role) => role.id === selectedRole);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 via-white to-green-50 p-4">
      <div className="w-full max-w-md space-y-6">
        {/* Header */}
        <div className="space-y-2 text-center">
          <div className="mb-4 flex items-center justify-center space-x-2">
            <div className="rounded-lg bg-blue-600 p-2">
              <LuShield className="h-6 w-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900">MedCare EHR</h1>
          </div>
          <p className="text-gray-600">Secure Healthcare Management System</p>
        </div>

        {/* Role Selection */}
        {/* <Card> */}
        <div className="">
          {/* <CardHeader className="pb-4"> */}
          <div className="pb-4">
            {/* <CardTitle className="text-lg">Select Your Role</CardTitle> */}
            <h1 className="text-lg">Select Your Role</h1>

            {/* <CardDescription></CardDescription> */}
            <p>Choose your access level to continue</p>
            {/* </CardHeader> */}
          </div>

          {/* <CardContent className="space-y-3"> */}
          <div className="space-y-3">
            <div className="grid grid-cols-2 gap-3">
              {roles.map((role) => {
                const Icon = role.icon;
                return (
                  <button
                    key={role.id}
                    onClick={() => setSelectedRole(role.id)}
                    className={`rounded-lg border-2 p-3 transition-all hover:shadow-md ${
                      selectedRole === role.id
                        ? role.color
                        : "border-gray-200 bg-white hover:border-gray-300"
                    }`}
                  >
                    <div className="flex flex-col items-center space-y-2">
                      <Icon className="h-6 w-6" />
                      <span className="text-sm font-medium">{role.label}</span>
                    </div>
                  </button>
                );
              })}
            </div>

            {selectedRoleData && (
              <div className="mt-4 rounded-lg bg-gray-50 p-3">
                <div className="mb-1 flex items-center space-x-2">
                  {/* <selectedRoleData.icon className="h-4 w-4 text-gray-600" /> */}
                  <div className="h-4 w-4 text-gray-600" />
                  {/* <Badge variant="secondary" className="text-xs"></Badge> */}
                  <span className="text-xs">{selectedRoleData.label}</span>
                </div>
                <p className="text-sm text-gray-600">
                  {selectedRoleData.description}
                </p>
              </div>
            )}
            {/* </CardContent> */}
          </div>
          {/* </Card> */}
        </div>

        {/* Login Form */}
        {/* </Card> */}
        <div>
          <div>
            <h1>Sign In</h1>
            <p>Enter your credentials to access the system</p>
          </div>

          <div>
            <Form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="email">Email Address</label>
                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="password">Password</label>
                <div className="relative">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute top-1/2 right-3 -translate-y-1/2 transform text-gray-500 hover:text-gray-700"
                  >
                    {showPassword ? (
                      <LuEyeOff className="h-4 w-4" />
                    ) : (
                      <LuEye className="h-4 w-4" />
                    )}
                  </button>
                </div>
              </div>

              {error && (
                <div variant="destructive">
                  <p>{error}</p>
                </div>
                // <Alert variant="destructive">
                //   <AlertDescription>{error}</AlertDescription>
                // </Alert>
              )}

              <button
                type="submit"
                className="w-full"
                disabled={isLoading || !selectedRole}
              >
                {isLoading ? "Signing In..." : "Sign In"}
              </button>
            </Form>
          </div>
        </div>

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
