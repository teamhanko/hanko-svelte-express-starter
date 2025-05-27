<script>
    import { onMount } from "svelte";
    import { navigate } from "svelte-routing";

    import { validateSession } from "../lib/validateSession";

    onMount(async () => {
        if(!await validateSession()){
            navigate("/");
        }
    })
</script>

<slot/>