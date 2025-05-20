<script>
	import LogoutButton from './../components/LogoutButton.svelte';
    import { onMount } from 'svelte';

    import { useLocation } from 'svelte-routing';
    const location = useLocation();

    const hankoApi = import.meta.env.VITE_HANKO_API_URL;
    import { Hanko } from '@teamhanko/hanko-elements';

    import './hanko-starter-style.css';
  
    let email = '';
    let pathname = '';
  
    async function fetchUserData() {
      const hanko = new Hanko(hankoApi);
      // @ts-ignore
      // getUser currently returns the wrong value (email instead of emails)
      // For future hanko versions use .emails[0].address
      const email = (await hanko.getUser()).email;
      return { email: email };
    }
  
    onMount(async () => {
      const data = await fetchUserData();
      email = data.email;
      
      pathname = $location.pathname;
    });
  </script>
  
  <div class="starterHeader">
    <div class="headerGap"></div>
    <div class="userMenu">
      <div class="userInfo">
        <h1>{email}</h1>
        <img src="/userpfp.png" alt="User profile" />
        <img src="/expand.png" alt="Expand" class="expandIcon" />
      </div>
      <div class="userDropdown">
        {#if pathname.includes('profile')}
          <a href="/dashboard">
            <button>Dashboard</button>
          </a>
        {:else}
          <a href="/profile">
            <button>Profile</button>
          </a>
        {/if}
        <LogoutButton />
      </div>
    </div>
  </div>
  