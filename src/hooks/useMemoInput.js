import { useState } from "react";

export default function useMemoInput(initialMemo) {
  const [memo, setMemo] = useState(initialMemo);

  function handleTitleChange(e) {
    setMemo({ ...memo, title: e.target.value });
  }

  function handleContentChange(e) {
    setMemo({ ...memo, content: e.target.value });
  }

  return [memo, handleTitleChange, handleContentChange];
}
