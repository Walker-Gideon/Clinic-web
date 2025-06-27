import AuthHeader from "./AuthHeader";
import RoleSelection from "./RoleSelection";
import SignForm from "./SignForm";
import AddOption from "./AddOption";
import Notice from "./Notice";

export default function AuthLayout() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 via-white to-green-50 p-4">
      <div className="medium:max-w-md medium:space-y-6 w-full max-w-xs space-y-8 py-8">
        <AuthHeader />
        <RoleSelection />
        <SignForm />
        <AddOption />
        <Notice />
      </div>
    </div>
  );
}
