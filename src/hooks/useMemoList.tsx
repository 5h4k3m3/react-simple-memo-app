import { useCallback, useState } from "react";

// memoList に関する custom hook
export const useMemoList = () => {
  // memo list(state)
  const [memos, setMemos] = useState<string[]>([]);

  // add memo
  const addTodo = useCallback(
    (text: string) => {
      // stateを変更するために配列を新しく作る
      const newMemos = [...memos];
      newMemos.push(text);
      setMemos(newMemos);
    },
    [memos]
  );

  // delete memo
  const deleteTodo = useCallback(
    (index: number) => {
      // stateを変更するために配列を新しく作る
      const newMemos = [...memos];
      // index番目から1要素削除する
      newMemos.splice(index, 1);
      setMemos(newMemos);
    },
    [memos]
  );

  return { memos, addTodo, deleteTodo };
};
