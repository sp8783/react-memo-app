import useMemoInput from "./hooks/useMemoInput.js";

export default function AddForm({ onAddMemo, onCancel }) {
  const [newMemo, handleTitleChange, handleContentChange] = useMemoInput({
    id: crypto.randomUUID(),
    title: "",
    content: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    onAddMemo(newMemo);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={newMemo.title}
        onChange={handleTitleChange}
        placeholder="Title"
      />
      <textarea
        value={newMemo.content}
        onChange={handleContentChange}
        placeholder="Content"
      />
      <div>
        <button type="submit">Add</button>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
}
