import { useState, useEffect } from "react";
import { useLoggedIn } from "./hooks/useLoggedIn.js";
import AuthButton from "./AuthButton.js";
import MemoList from "./MemoList.js";
import AddForm from "./AddForm.js";
import EditForm from "./EditForm.js";
import MemoDetail from "./MemoDetail.js";
import "./App.css";

function App() {
  const { isLoggedIn } = useLoggedIn();
  const [memos, setMemos] = useState([]);
  const [activeMemoId, setActiveMemoId] = useState(null);
  const [mode, setMode] = useState("view");
  const activeMemo = memos.find((memo) => memo.id === activeMemoId);

  useEffect(() => {
    const savedMemos = localStorage.getItem("memos");
    setMemos(savedMemos ? JSON.parse(savedMemos) : []);
  }, []);

  function updateLocalStorage(memos) {
    localStorage.setItem("memos", JSON.stringify(memos));
  }

  function handleAddMemo(newMemo) {
    setMemos((prevMemos) => {
      const newMemos = [...prevMemos, { ...newMemo, id: crypto.randomUUID() }];
      updateLocalStorage(newMemos);
      return newMemos;
    });
    setMode("view");
  }

  function handleEditMemo(editedMemo) {
    setMemos((prevMemos) => {
      const newMemos = prevMemos.map((memo) =>
        memo.id === editedMemo.id ? editedMemo : memo,
      );
      updateLocalStorage(newMemos);
      return newMemos;
    });
    setMode("view");
  }

  function handleDeleteMemo(id) {
    setMemos((prevMemos) => {
      const newMemos = prevMemos.filter((memo) => memo.id !== id);
      updateLocalStorage(newMemos);
      return newMemos;
    });
    setActiveMemoId(null);
    setMode("view");
  }

  function handleSelectMemo(id) {
    setActiveMemoId(id);
    setMode("view");
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="login-section">
          <AuthButton />
        </div>
        <div className="memolist-section">
          <MemoList memos={memos} onSelectMemo={handleSelectMemo} />
          {isLoggedIn && <button onClick={() => setMode("add")}>+</button>}
        </div>
      </header>
      <div className="App-main">
        {mode === "view" && activeMemo && (
          <MemoDetail
            activeMemo={activeMemo}
            onEdit={() => setMode("edit")}
            onDelete={() => handleDeleteMemo(activeMemoId)}
          />
        )}
        {mode === "add" && isLoggedIn && (
          <AddForm
            onAddMemo={handleAddMemo}
            onCancel={() => setMode("view")}
          />
        )}
        {mode === "edit" && isLoggedIn && (
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
