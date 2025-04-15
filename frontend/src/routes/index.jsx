import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home";
import { Agendamento } from "../pages/Agendamento";
import { ConclusaoAgendamento } from "../pages/conclusaoAgendamento";
import { ScrollToTop } from "../Components/ScrollToTop";

export function Router() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agendar" element={<Agendamento />} />
        <Route
          path="/agendamento-concluido"
          element={<ConclusaoAgendamento />}
        />
      </Routes>
    </BrowserRouter>
  );
}
