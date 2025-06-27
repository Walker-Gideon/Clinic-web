import AuthHeader from "./AuthHeader";
import RoleSelection from "./RoleSelection";
import SignForm from "./SignForm";
import AddOption from "./AddOption";
import Notice from "./Notice";

export default function AuthLayout() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 via-white to-green-50 p-4">
      <div className="w-full max-w-md space-y-6">
        <AuthHeader />
        <RoleSelection />
        <SignForm />
        <AddOption />
        <Notice />
      </div>
    </div>
  );
}
