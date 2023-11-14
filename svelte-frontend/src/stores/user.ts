import { writable } from "svelte/store";


export const user = writable(false);

export async function checkAuthentication() {
  try {
    const response = await fetch("http://localhost:5001/api/protected", {
      credentials: "include",
    });
    if (response.ok) {
      user.set(true);
    } else {
      user.set(false);
    }
  } catch (error) {
    user.set(false);
  }
}
