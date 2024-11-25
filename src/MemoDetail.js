import { useLoggedIn } from "./hooks/useLoggedIn";

export default function MemoDetail({ activeMemo, onEdit, onDelete }) {
  const { isLoggedIn } = useLoggedIn();

  return (
    <div>
      <h1>{activeMemo.title}</h1>
      <p>{activeMemo.content}</p>
      {isLoggedIn && <button onClick={onEdit}>Edit</button>}
      {isLoggedIn && <button onClick={onDelete}>Delete</button>}
    </div>
  );
}
