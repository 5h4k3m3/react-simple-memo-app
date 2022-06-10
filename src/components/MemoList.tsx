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
