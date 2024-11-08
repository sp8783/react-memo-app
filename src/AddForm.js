import useMemoInput from "./useMemoInput.js";

export default function AddForm({ lastMemoId, onAddMemo, onCancel }) {
  const [newMemo, handleTitleChange, handleContentChange] = useMemoInput({
    id: lastMemoId + 1,
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
