import React from "react";

const HistoryItem = ({ item, i, onOpen, onDelete }) => {
  return (
    <li
      key={i}
      className="flex justify-between p-2 bg-gray-100 rounded text-sm text-black"
    >
      <button
        onClick={onOpen}
        className="flex-1 py-2 overflow-hidden text-ellipsis whitespace-nowrap text-left cursor-pointer"
      >
        {item.question.length > 20
          ? item.question.slice(0, 20) + "…"
          : item.question}
      </button>
      <button onClick={onDelete} className="cursor-pointer">
        ❌
      </button>
    </li>
  );
};
export default React.memo(HistoryItem);
