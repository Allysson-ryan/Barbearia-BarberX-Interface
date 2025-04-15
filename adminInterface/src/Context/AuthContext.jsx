import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { AuthContext } from "./useAuth";

export function AuthProvider({ children }) {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const logout = useCallback(() => {
    localStorage.removeItem("barberx:userData");
    setUser(null);
    navigate("/entrar");
  }, [navigate]);

  useEffect(() => {
    const storedUser = localStorage.getItem("barberx:userData");
    if (storedUser) {
      try {
        const parsed = JSON.parse(storedUser);
        const decoded = jwtDecode(parsed.token);
        const now = Date.now() / 1000;

        if (decoded.exp < now) {
          logout();
        } else {
          setUser(parsed);
        }
      } catch {
        logout();
      }
    }
    setLoading(false);
  }, [logout]);

  function login(userData) {
    localStorage.setItem("barberx:userData", JSON.stringify(userData));
    setUser(userData);
    navigate("/"), 1000;
  }

  return (
    <AuthContext.Provider
      value={{ user, login, logout, isAuthenticated: !!user, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
}
