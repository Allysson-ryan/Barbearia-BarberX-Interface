import { Router } from "./routes";
import GlobalStyles from "./Style/GlobalStyles";

export function App() {
  return (
    <div>
      <GlobalStyles />
      <Router />
    </div>
  );
}
