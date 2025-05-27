<script>
  import "./hanko-style.css"

  import { onMount } from "svelte";
	import { navigate } from 'svelte-routing';
  import { register } from "@teamhanko/hanko-elements";

  const hankoApi = import.meta.env.VITE_HANKO_API_URL;

  const redirectAfterLogin = () => {
    navigate("/dashboard");//Navigate to dashboard when logging in
  };

  onMount(async () => {
    register(hankoApi).catch((error) => {
      // handle error
    });
  });
</script>

<hanko-auth on:onSessionCreated={redirectAfterLogin} />