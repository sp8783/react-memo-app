import { useState } from "react";

export default function EditForm({ activeMemo, onEditMemo, onCancel }) {
  const [editedMemo, setEditedMemo] = useState(activeMemo);

  function handleTitleChange(e) {
    setEditedMemo({ ...editedMemo, title: e.target.value });
  }

  function handleContentChange(e) {
    setEditedMemo({ ...editedMemo, content: e.target.value });
  }

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
