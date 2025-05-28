import BasicModal from "../BasicModal";
import { useOverlay } from "@toss/use-overlay";
import ConfirmModal from "../ConfirmModal";
import React, { useCallback } from "react";
import HistoryItem from "../HistoryItem";
import { useHistoryStore } from "../../store/historyStore";

function Sidebar() {
  console.log("Sidebar 리렌더링");

  const overlay = useOverlay();
  const { history, setHistory, clearHistory, deleteHistoryItem } =
    useHistoryStore();

  const handleHistoryModal = useCallback(
    (item) => {
      overlay.open(({ isOpen, close }) => (
        <BasicModal close={close} item={item} isOpen={isOpen} />
      ));
    },
    [overlay]
  );

  const handleClearConfirm = useCallback(() => {
    overlay.open(({ isOpen, close }) => (
      <ConfirmModal
        isOpen={isOpen}
        close={close}
        message="모든 히스토리를 삭제하시겠습니까?"
        confirmText="삭제"
        cancelText="취소"
        onConfirm={clearHistory}
      />
    ));
  }, [overlay, clearHistory]);

  const handleDeleteItem = useCallback(
    (index) => {
      overlay.open(({ isOpen, close }) => (
        <ConfirmModal
          isOpen={isOpen}
          close={close}
          message="이 항목을 삭제하시겠습니까?"
          confirmText="삭제"
          cancelText="취소"
          onConfirm={() => deleteHistoryItem(index)}
        />
      ));
    },
    [overlay, deleteHistoryItem]
  );

  console.log("history", history);

  return (
    <>
      <aside className="w-64 px-4 py-8 border-r border-[#1e40af] overflow-auto">
        <div className="flex items-end justify-between font-semibold mb-6 pb-2 border-b border-[#1e40af]">
          <h2 className="font-bold text-2xl text-[#1e40af]">History</h2>
          <button
            onClick={handleClearConfirm}
            className={`text-sm hover:underline transition-opacity ${
              history.length === 0
                ? "text-gray-400 cursor-not-allowed opacity-50"
                : "text-red-500 cursor-pointer"
            }`}
            disabled={history.length === 0}
          >
            Clear All
          </button>
        </div>

        <ul className="space-y-2">
          {history.map((item, i) => (
            <HistoryItem
              key={i}
              item={item}
              index={i}
              onOpen={handleHistoryModal}
              onDelete={handleDeleteItem}
            />
          ))}
        </ul>
      </aside>
    </>
  );
}
export default React.memo(Sidebar);
