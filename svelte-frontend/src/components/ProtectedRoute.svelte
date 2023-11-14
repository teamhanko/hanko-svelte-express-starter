<script>
    import { onMount } from 'svelte';
    import { navigate } from 'svelte-routing';
    import { user, checkAuthentication } from '../stores/user';
  
    let isAuthenticated = false;
  
    user.subscribe(value => {
      isAuthenticated = value;
    });
  
    onMount(async () => {
      await checkAuthentication();
      if (!isAuthenticated) {
        navigate('/login'); 
      }
    });
  </script>
  
  <slot />