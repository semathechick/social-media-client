import * as auth from "../../api/auth/index.js";
import { updateLoginVisibility } from "../../ui/auth.js";

export async function loginListener(event) {
  event.preventDefault(); // Correcting the typo

  const form = event.target;
  const data = new FormData(form); // Use FormData to get form data
  const email = data.get("email");
  const password = data.get("password");

  try {
    const { name } = await auth.login(email, password); // Assuming auth.login returns an object with name
    updateLoginVisibility();
    location.href = `./?view=profile&name=${name}`;
  } catch {
    alert("Either your username was not found or your password is incorrect");
  }
}
