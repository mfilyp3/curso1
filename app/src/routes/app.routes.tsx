import { Routes, Route } from "react-router-dom";
import { Layout } from "../components/Layout";
import { Dashboard } from "../pages/Dashboard";
import { List } from "../pages/List";

export default function AppRoutes() {
  return (
    <Layout>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/list/:type" element={<List />}></Route>
      </Routes>
    </Layout>
  );
}
