import { Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login";
import { AdminLayout } from "./Layout";
import { Dashboard } from "./pages/Dashboard";
import { ClientsServed } from "./pages/ClientsServed";
import { RegistrationTime } from "./pages/RegistrationTime";
import { SettingsProfile } from "./pages/SettingsProfile";
import { Cadastrar } from "./pages/Cadastrar";
import { RequireAuth } from "./Hooks/RequireAuth";

export function Router() {
  return (
    <Routes>
      <Route path="/entrar" element={<Login />} />
      <Route path="/cadastrar" element={<Cadastrar />} />

      <Route
        path="/"
        element={
          <RequireAuth>
            <AdminLayout />
          </RequireAuth>
        }
      >
        <Route path="/" element={<Dashboard />} />
        <Route path="/registrar-horario" element={<RegistrationTime />} />
        <Route path="/clientes-atendidos" element={<ClientsServed />} />
        <Route path="/confuguracao" element={<SettingsProfile />} />
      </Route>
    </Routes>
  );
}
