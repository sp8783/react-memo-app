import { useState } from "react";
import MemoList from "./MemoList.js";
import AddMemo from "./AddMemo.js";
import EditMemo from "./EditMemo.js";
import "./App.css";

function App() {
  const initialMemos = [
    { id: 1, title: "test1", content: "Hello!!" },
    { id: 2, title: "test2", content: "lol" },
  ];

  const [memos, setMemos] = useState(initialMemos);
  const [activeMemoId, setActiveMemoId] = useState(null);
  const [mode, setMode] = useState("view");
  const lastMemoId = memos[memos.length - 1]?.id;
  const activeMemo = memos.find((memo) => memo.id === activeMemoId);

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
          <div>
            <h1>{activeMemo?.title}</h1>
            <p>{activeMemo?.content}</p>
            <button onClick={() => setMode("edit")}>Edit</button>
            <button onClick={() => handleDeleteMemo(activeMemoId)}>
              Delete
            </button>
          </div>
        )}
        {mode === "add" && (
          <AddMemo
            lastMemoId={lastMemoId}
            setMemos={setMemos}
            setMode={setMode}
          />
        )}
        {mode === "edit" && (
          <EditMemo
            activeMemo={activeMemo}
            setMemos={setMemos}
            setMode={setMode}
          />
        )}
      </div>
    </div>
  );
}

export default App;
