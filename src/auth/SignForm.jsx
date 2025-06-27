import { Form } from "react-router-dom";
import { useAuth } from "./AuthContext";
import { LuEye } from "react-icons/lu";
import { LuEyeOff } from "react-icons/lu";

export default function SignForm() {
  const {
    selectedRole,
    setIsLoading,
    setError,
    showPassword,
    setShowPassword,
    error,
    isLoading,
  } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    setIsLoading(true);

    // Simulate authentication
    setTimeout(() => {
      setIsLoading(false);
      // In a real app, this would redirect based on role
      alert(`Login successful as ${selectedRole}`);
    }, 2000);
  };

  return (
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
  );
}
