import { BrowserRouter as Router } from "react-router-dom";

import AppRoutes from "./app.routes";

export function Routes() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}
