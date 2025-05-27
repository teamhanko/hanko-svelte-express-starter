<script>
    import "./hanko-style.css"

    import { register } from "@teamhanko/hanko-elements";
    import { onMount } from "svelte";

    const hankoApi = import.meta.env.VITE_HANKO_API_URL;
  
    onMount(async () => {
      register(hankoApi).catch((error) => {
        // handle error
      });
    });
</script>
  
<hanko-profile />