export const MemoList = () => {
  return (
    <div>
      <p>Memo List</p>
      <ul>
        {memos.map((memo, index) => (
          <li key={memo}>
            <p>{memo}</p>
            <button onClick={() => onClickDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
