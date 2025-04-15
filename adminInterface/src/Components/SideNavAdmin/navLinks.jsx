import DashboardIcon from "@mui/icons-material/Dashboard";
import EditCalendarIcon from "@mui/icons-material/EditCalendar";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import SettingsIcon from "@mui/icons-material/Settings";

export const navLinks = [
  {
    id: 1,
    label: "Dashboard",
    path: "/",
    icons: <DashboardIcon />,
  },
  {
    id: 2,
    label: "Cadastrar Horário",
    path: "/registrar-horario",
    icons: <EditCalendarIcon />,
  },
  {
    id: 3,
    label: "Clientes Atendidos",
    path: "/clientes-atendidos",
    icons: <AssignmentTurnedInIcon />,
  },
  {
    id: 4,
    label: "Configurações",
    path: "/confuguracao",
    icons: <SettingsIcon />,
  },
];
