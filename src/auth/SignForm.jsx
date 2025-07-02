import { Form, useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
import { LuEye } from "react-icons/lu";
import { LuEyeOff } from "react-icons/lu";
import Card from "../components/ui/card/Card";
import CardHeader from "../components/ui/card/CardHeader";
import CardTitle from "../components/ui/card/CardTitle";
import CardDescription from "../components/ui/card/CardDescription";
import CardContent from "../components/ui/card/CardContent";
import Label from "../components/ui/label/Label";
import Input from "../components/ui/input/Input";
import Button from "../components/ui/button/Button";
import Alert from "../components/ui/alert/Alert";
import AlertDescription from "../components/ui/alert/AlertDescription";

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

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    setIsLoading(true);

    // Simulate authentication
    setTimeout(() => {
      setIsLoading(false);
      // In a real app, this would redirect based on role
      alert(`Login successful as ${selectedRole}`);
      if (selectedRole === "patient") navigate("patient");
      if (selectedRole === "nurse") navigate("nurse");
      if (selectedRole === "doctor") navigate("doctor");
      if (selectedRole === "admin") navigate("admin");
    }, 2000);
  };

  return (
    <Card styling="border-gray-300 bg-white px-5 medium:py-6 py-5">
      <CardHeader>
        <CardTitle styling="middle:text-3xl  text-2xl">Sign In</CardTitle>
        <CardDescription>
          Enter your credentials to access the system
        </CardDescription>
      </CardHeader>

      <CardContent styling="medium:pt-6 pt-8">
        <Form onSubmit={handleLogin} className="medium:space-y-6 space-y-5">
          <div className="flex flex-col space-y-2">
            <Label forLabel="email">Email Address</Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="flex flex-col space-y-2">
            <Label forLabel="password">Password</Label>
            <div className="relative">
              <Input
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
                  <LuEyeOff className="h-4 w-4 cursor-pointer" />
                ) : (
                  <LuEye className="h-4 w-4 cursor-pointer" />
                )}
              </button>
            </div>
          </div>

          {error && (
            <Alert variant="destructive">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          <Button
            type="submit"
            className="medium:text-base w-full rounded-sm bg-gray-950 py-1.5 text-[0.9rem] text-white hover:bg-gray-900"
            disabled={isLoading || !selectedRole}
          >
            {isLoading ? "Signing In..." : "Sign In"}
          </Button>
        </Form>
      </CardContent>
    </Card>
  );
}
