<script lang="ts">
  import { onMount } from "svelte";
  import { register } from "@teamhanko/hanko-elements";

  const hankoApi = import.meta.env.VITE_HANKO_API_URL;

  onMount(async () => {
    register(hankoApi).catch((error) => {
      // handle error
    });
  });
</script>

<hanko-profile />
