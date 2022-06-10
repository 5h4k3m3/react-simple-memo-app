import { ChangeEvent, useState, useCallback, FC } from "react";
import { MemoList } from "./components/MemoList";

// FC: 関数コンポーネントの型定義
export const App: FC = () => {
  // textbox に入力された文字列(state)
  const [text, setText] = useState<string>("");
  // memo list(state)
  const [memos, setMemos] = useState<string[]>([]);

  // HTMLのinputタグから入力文字列の変更イベントを受け取る
  const onChangeText = (event: ChangeEvent<HTMLInputElement>) =>
    setText(event.target.value);
  // Addボタンイベント
  const onClickAdd = () => {
    // stateを変更するために配列を新しく作る
    const newMemos = [...memos];
    newMemos.push(text);
    setMemos(newMemos);

    setText("");
  };
  //Deleteボタンイベント
  // useCallback: 関数のメモ化, 第2引数：依存配列
  const onClickDelete = useCallback(
    (index: number) => {
      // stateを変更するために配列を新しく作る
      const newMemos = [...memos];
      // index番目から1要素削除する
      newMemos.splice(index, 1);
      setMemos(newMemos);
    },
    [memos]
  );

  return (
    <>
      <h1>Simple Memo App</h1>
      <input type="text" value={text} onChange={onChangeText} />
      <button onClick={onClickAdd}>Add Item</button>
      <MemoList memos={memos} onClickDelete={onClickDelete} />
    </>
  );
};
