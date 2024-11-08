import useMemoInput from "./useMemoInput.js";

export default function EditForm({ activeMemo, onEditMemo, onCancel }) {
  const [editedMemo, handleTitleChange, handleContentChange] =
    useMemoInput(activeMemo);

  function handleSubmit(e) {
    e.preventDefault();
    onEditMemo(editedMemo);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={editedMemo.title}
        onChange={handleTitleChange}
        placeholder="Title"
      />
      <textarea
        value={editedMemo.content}
        onChange={handleContentChange}
        placeholder="Content"
      />
      <button type="submit">Edit</button>
      <button type="button" onClick={onCancel}>
        Cancel
      </button>
    </form>
  );
}
