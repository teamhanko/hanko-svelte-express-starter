<script lang="ts">
  import { Router, Route } from "svelte-routing";
  import LoginPage from "./pages/LoginPage.svelte";
  import HomePage from "./pages/HomePage.svelte";
  import DashboardPage from "./pages/DashboardPage.svelte";
  import ProtectedPage from "./pages/ProtectedPage.svelte";
  import ProtectedRoute from "./components/ProtectedRoute.svelte";
</script>

<Router>
  <Route path="/" component={HomePage} />
  <Route path="/login" component={LoginPage} />
  <Route path="/dashboard" component={DashboardPage} />
  <Route path="/protected">
    <ProtectedRoute>
      <ProtectedPage />
    </ProtectedRoute>
  </Route>
</Router>
