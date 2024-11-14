export default function MemoList({ memos, onSelectMemo }) {
  return (
    <div>
      {memos.map((memo) => (
        <li key={memo.id} onClick={() => onSelectMemo(memo.id)}>
          {memo.title}
        </li>
      ))}
    </div>
  );
}
