import { useLoggedIn } from "./hooks/useLoggedIn";

export default function AuthButton() {
  const { isLoggedIn, login, logout } = useLoggedIn();

  function handleLoginStatus() {
    if (isLoggedIn) {
      logout();
    } else {
      login();
    }
  }

  return (
    <div>
      {isLoggedIn ? <p>Welcome :)</p> : <p>Please log in</p>}
      <button onClick={handleLoginStatus}>
        {isLoggedIn ? "Logout" : "Login"}
      </button>
    </div>
  );
}
