<script>
  import { navigate } from "svelte-routing";
  import { Hanko } from "@teamhanko/hanko-elements";

  const hankoApi = import.meta.env.VITE_HANKO_API_URL;

  const hanko = new Hanko(hankoApi);

  const logout = () => {
    hanko.user.logout().catch((error) => {
      // handle error
    });
    navigate("/");
  };
</script>

<button on:click={logout}>Logout</button>
