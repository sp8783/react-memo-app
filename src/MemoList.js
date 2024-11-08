export default function MemoList({ memos, onSelectMemo }) {
  const memoList = memos.map((memo) => (
    <li key={memo.id} onClick={() => onSelectMemo(memo.id)}>
      {memo.title}
    </li>
  ));

  return (
    <div>
      <ul>{memoList}</ul>
    </div>
  );
}
