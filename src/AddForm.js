import { useState } from "react";

export default function AddForm({ lastMemoId, setMemos, setMode }) {
  const [newMemo, setNewMemo] = useState({
    id: lastMemoId + 1,
    title: "",
    content: "",
  });

  function handleTitleChange(e) {
    setNewMemo({ ...newMemo, title: e.target.value });
  }

  function handleContentChange(e) {
    setNewMemo({ ...newMemo, content: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setMemos((prevMemos) => [
      ...prevMemos,
      { ...newMemo, id: prevMemos.length + 1 },
    ]);
    setMode("view");
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
      <button type="submit">Add</button>
      <button type="button" onClick={() => setMode("view")}>
        Cancel
      </button>
    </form>
  );
}
