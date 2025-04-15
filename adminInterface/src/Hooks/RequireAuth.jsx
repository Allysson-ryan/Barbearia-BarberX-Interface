import { Navigate } from "react-router-dom";
import { useAuth } from "../Context/useAuth";

export function RequireAuth({ children }) {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (!isAuthenticated) {
    return <Navigate to="/entrar" replace />;
  }

  return children;
}
