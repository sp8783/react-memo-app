import { useLoggedIn } from "./hooks/useLoggedIn";

export default function LoggedInHeader() {
  const { isLoggedIn, setIsLoggedIn } = useLoggedIn();

  function handleLoginStatus() {
    setIsLoggedIn(!isLoggedIn);
  }

  return (
    <header>
      {isLoggedIn ? <h1>Welcome :)</h1> : <h1>Please log in</h1>}
      <button onClick={handleLoginStatus}>
        {isLoggedIn ? "Logout" : "Login"}
      </button>
    </header>
  );
}
