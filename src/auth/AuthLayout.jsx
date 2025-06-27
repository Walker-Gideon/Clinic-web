import { Form } from "react-router-dom";
import { useAuth } from "./AuthContext";
import { LuShield } from "react-icons/lu";
import { LuEye } from "react-icons/lu";
import { LuEyeOff } from "react-icons/lu";
import AuthHeader from "./AuthHeader";
import RoleSelection from "./RoleSelection";

export default function AuthLayout() {
  const { selectedRole, email, password, setIsLoading, setError, setEmail } =
    useAuth();

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

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 via-white to-green-50 p-4">
      <div className="w-full max-w-md space-y-6">
        {/* Header */}
        <AuthHeader />

        {/* Role Selection */}
        <RoleSelection />

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
