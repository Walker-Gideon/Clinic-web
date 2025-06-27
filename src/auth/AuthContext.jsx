import { createContext, useContext, useMemo, useState } from "react";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [selectedRole, setSelectedRole] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  let value = useMemo(
    () => ({
      selectedRole,
      setSelectedRole,
      email,
      setEmail,
      password,
      setPassword,
      showPassword,
      setShowPassword,
      isLoading,
      setIsLoading,
      error,
      setError,
    }),
    [selectedRole, email, password, showPassword, isLoading, error],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

function useAuth() {
  const context = useContext(AuthContext);

  if (context === undefined)
    throw new Error("AuthContext was used outside of its provider");

  return context;
}

export { AuthProvider, useAuth };
