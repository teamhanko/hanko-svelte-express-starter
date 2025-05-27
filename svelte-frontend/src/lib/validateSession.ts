const backendUrl = import.meta.env.BACKEND_URL;

export async function validateSession() {
  try {
    const response = await fetch(backendUrl+"/validate", {
      credentials: "include",
    });
    return response.ok;

  } catch (error) {
    return false;
  }
}