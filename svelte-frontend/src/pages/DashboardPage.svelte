<script lang="ts">
  import { navigate } from "svelte-routing";
  import HankoProfile from "../components/HankoProfile.svelte";
  import LogoutButton from "../components/LogoutButton.svelte";
</script>

<HankoProfile />
<LogoutButton />
<button on:click={() => navigate("/protected")}>Acess the protected page</button
>
