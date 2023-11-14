<script lang="ts">
  import { onMount } from "svelte";
  import { navigate } from "svelte-routing";
  import { register } from "@teamhanko/hanko-elements";

  const hankoApi = import.meta.env.VITE_HANKO_API_URL;

  const redirectAfterLogin = () => {
    // successfully logged in, redirect to a page in your application
    navigate("/dashboard");
  };

  onMount(async () => {
    register(hankoApi).catch((error) => {
      // handle error
    });
  });
</script>

<hanko-auth on:onAuthFlowCompleted={redirectAfterLogin} />
