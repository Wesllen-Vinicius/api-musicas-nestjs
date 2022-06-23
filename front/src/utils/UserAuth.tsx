import { Props } from "framer-motion/types/types";
import React, { createContext, useState, useEffect, useContext } from "react";
import { api } from "../services/api";

export interface AuthContextData {
  signed: boolean;
  user: object | null;
  Login(user: object): Promise<void>;
  Logout(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }: Props) => {
  const [user, setUser] = useState<object | null>(null);

  useEffect(() => {
    const storagedUser = sessionStorage.getItem("@App:user");
    const storagedToken = sessionStorage.getItem("@App:token");

    if (storagedToken && storagedUser) {
      setUser(JSON.parse(storagedUser));
      api.defaults.headers.common["Authorization"] = `Bearer ${storagedToken}`;
    }
  }, []);

  async function Login(userData: object) {
    const response = await api.post("https://localhost:3000", userData);

    setUser(response.data.user);
    api.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${response.data.token}`;

    sessionStorage.setItem("@App:user", JSON.stringify(response.data.user));
    sessionStorage.setItem("@App:token", response.data.token);
  }

  function Logout() {
    setUser(null);
    sessionStorage.clear();
  }

  return (
    <AuthContext.Provider
      value={{ signed: Boolean(user), user, Login, Logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}
