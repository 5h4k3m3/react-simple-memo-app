import { ChangeEvent, useState } from "react";

export const App = () => {
  const [text, setText] = useState<string>("");
  const [memos, setMemos] = useState<string[]>([]);

  const onChangeText = (event: ChangeEvent<HTMLInputElement>) =>
    setText(event.target.value);
  const onClickAdd = () => {
    const newMemos = [...memos];
    newMemos.push(text);

    setMemos(newMemos);
    setText("");
  };
  const onClickDelete = (index: number) => {
    const newMemos = [...memos];
    newMemos.splice(index, 1);
    setMemos(newMemos);
  };

  return (
    <>
      <h1>Simple Memo App</h1>
      <input type="text" value={text} onChange={onChangeText} />
      <button onClick={onClickAdd}>Add Item</button>
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
    </>
  );
};
