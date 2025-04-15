import { Outlet, Navigate } from "react-router-dom";
import { SideNavAdmin } from "../Components/SideNavAdmin";
import { Container } from "./styles";

export function AdminLayout() {
  const userData = JSON.parse(localStorage.getItem("barberx:userData"));
  if (!userData || !userData.token) {
    return;
  }

  return (
    <Container>
      <SideNavAdmin />
      <main>
        <section>
          <Outlet />
        </section>
      </main>
    </Container>
  );
}
