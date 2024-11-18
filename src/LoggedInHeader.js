import { useLoggedIn } from "./hooks/useLoggedIn";

export default function LoggedInHeader() {
  const { isLoggedIn, setIsLoggedIn } = useLoggedIn();

  function handleLoginStatus() {
    setIsLoggedIn(!isLoggedIn);
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
