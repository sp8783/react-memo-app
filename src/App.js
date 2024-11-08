import { useState, useEffect } from "react";
import MemoList from "./MemoList.js";
import AddForm from "./AddForm.js";
import EditForm from "./EditForm.js";
import MemoDetail from "./MemoDetail.js";
import "./App.css";

function App() {
  const [memos, setMemos] = useState([]);
  const [activeMemoId, setActiveMemoId] = useState(null);
  const [mode, setMode] = useState("view");
  const lastMemoId = memos[memos.length - 1]?.id;
  const activeMemo = memos.find((memo) => memo.id === activeMemoId);

  useEffect(() => {
    const savedMemos = localStorage.getItem("memos");
    setMemos(savedMemos ? JSON.parse(savedMemos) : []);
  }, []);

  useEffect(() => {
    localStorage.setItem("memos", JSON.stringify(memos));
  }, [memos]);

  function handleAddMemo(newMemo) {
    setMemos((prevMemos) => [
      ...prevMemos,
      { ...newMemo, id: prevMemos.length + 1 },
    ]);
    setMode("view");
  }

  function handleEditMemo(editedMemo) {
    setMemos((prevMemos) =>
      prevMemos.map((memo) => (memo.id === activeMemoId ? editedMemo : memo))
    );
    setMode("view");
  }

  function handleDeleteMemo(id) {
    setMemos((prevMemos) => prevMemos.filter((memo) => memo.id !== id));
    setActiveMemoId(null);
    setMode("view");
  }

  function handleSelectMemo(id) {
    setActiveMemoId(id);
    setMode("view");
  }

  return (
    <div className="App">
      <div className="App-header">
        <MemoList memos={memos} onSelectMemo={handleSelectMemo} />
        <button onClick={() => setMode("add")}>+</button>
      </div>
      <div className="App-main">
        {mode === "view" && activeMemo && (
          <MemoDetail
            activeMemo={activeMemo}
            onEdit={() => setMode("edit")}
            onDelete={() => handleDeleteMemo(activeMemoId)}
          />
        )}
        {mode === "add" && (
          <AddForm
            lastMemoId={lastMemoId}
            onAddMemo={handleAddMemo}
            onCancel={() => setMode("view")}
          />
        )}
        {mode === "edit" && (
          <EditForm
            activeMemo={activeMemo}
            onEditMemo={handleEditMemo}
            onCancel={() => setMode("view")}
          />
        )}
      </div>
    </div>
  );
}

export default App;
