import { ChangeEvent, useState, useCallback, FC } from "react";
import { MemoList } from "./MemoList";
import { useMemoList } from "../hooks/useMemoList";

// FC: 関数コンポーネントの型定義
export const App: FC = () => {
  const { memos, addTodo, deleteTodo } = useMemoList();
  // textbox に入力された文字列(state)
  const [text, setText] = useState<string>("");

  // HTMLのinputタグから入力文字列の変更イベントを受け取る
  const onChangeText = (event: ChangeEvent<HTMLInputElement>) =>
    setText(event.target.value);
  // Addボタンイベント
  const onClickAdd = () => {
    addTodo(text);
    setText("");
  };
  //Deleteボタンイベント
  // useCallback: 関数のメモ化, 第2引数：依存配列
  const onClickDelete = useCallback(
    (index: number) => {
      deleteTodo(index);
    },
    [deleteTodo]
  );

  return (
    <>
      <h1 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
        Simple Memo App
      </h1>
      <div className="m-4 flex items-center">
        <input
          className="mr-4 w-full appearance-none rounded border py-2 px-3 shadow"
          placeholder="new Todo..."
          type="text"
          value={text}
          onChange={onChangeText}
        />
        <button
          className="rounded border-2 p-2 text-gray-500 hover:bg-gray-400 hover:text-white"
          onClick={onClickAdd}
        >
          Add
        </button>
      </div>
      <MemoList memos={memos} onClickDelete={onClickDelete} />
    </>
  );
};
