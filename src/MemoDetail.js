export default function MemoDetail({ activeMemo, onEdit, onDelete }) {
  return (
    <div>
      <h1>{activeMemo.title}</h1>
      <p>{activeMemo.content}</p>
      <button onClick={onEdit}>Edit</button>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
}
