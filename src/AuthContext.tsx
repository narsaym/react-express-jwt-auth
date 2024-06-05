import { createContext, ReactNode, useState } from "react";

interface AuthContextState {
  name?: string;
  setName: (name: string) => void;
  isAuthenticated: boolean;
  setAuthenticated: (auth: boolean) => void;
}

export const AuthContext = createContext<AuthContextState | undefined>(
  undefined
);

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [name, setName] = useState("");
  const [isAuthenticated, setAuthenticated] = useState(false);

  return (
    <AuthContext.Provider
      value={{ name, setName, isAuthenticated, setAuthenticated }}
    >
      {children}
    </AuthContext.Provider>
  );
};
