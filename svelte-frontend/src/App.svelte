<script>
  import { Router, Route } from "svelte-routing";
  import HomePage from "./pages/HomePage.svelte";
  import DashboardPage from "./pages/DashboardPage.svelte";
  import ProfilePage from "./pages/ProfilePage.svelte";
  import ProtectedRoute from "./components/ProtectedRoute.svelte";
</script>

<Router>
    <Route path="/"><HomePage/></Route>
    <Route path="/dashboard">
      <ProtectedRoute>
        <DashboardPage/>
      </ProtectedRoute>
    </Route>
    <Route path="/profile">
      <ProtectedRoute>
        <ProfilePage/>
      </ProtectedRoute>
    </Route>
</Router>