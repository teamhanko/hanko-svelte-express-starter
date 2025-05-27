<script>
    import "./hanko-style.css"

    import { Hanko } from "@teamhanko/hanko-elements";
    import { navigate } from 'svelte-routing';

    const hankoApi = import.meta.env.VITE_HANKO_API_URL;
  
    const hanko = new Hanko(hankoApi);
    const logout = () => {
      hanko.logout().catch((error) => {
        //Handle Error
        console.log("Error during logging out : " + error);
      });
      navigate("/");//Url to redirect to
    };
  </script>
  
  <button on:click={logout}>Sign-Out</button>