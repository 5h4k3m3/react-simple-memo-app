import { FC } from "react";

// propsの型定義
type Props = {
  memos: string[];
  onClickDelete: (index: number) => void;
};

export const MemoList: FC<Props> = (props) => {
  // 分割代入
  const { memos, onClickDelete } = props;

  return (
    <div>
      <p className="mt-6 text-center text-2xl font-bold text-white bg-indigo-300">
        Memo List
      </p>
      <ul>
        {memos.map((memo, index) => (
          <li className="flex items-center justify-between p-4" key={memo}>
            <p className="mr-4 w-full appearance-none rounded border py-2 px-3 shadow">
              {memo}
            </p>
            <button
              className="rounded border-2 p-2 text-gray-500 hover:bg-gray-400 hover:text-white"
              onClick={() => onClickDelete(index)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
