import Modal from "../BasicModal";
import { useOverlay } from "@toss/use-overlay";
import ConfirmModal from "../ConfirmModal";
import React from "react";
import HistoryItem from "../HistoryItem";

function Sidebar({ history, setHistory }) {
  console.log("Sidebar 리렌더링");

  const overlay = useOverlay();
  const handleHistoryModal = (item) => {
    overlay.open(({ isOpen, close }) => (
      <Modal close={close} item={item} isOpen={isOpen} />
    ));
  };

  const handleClearConfirm = () => {
    overlay.open(({ isOpen, close }) => (
      <ConfirmModal
        isOpen={isOpen}
        close={close}
        message="모든 히스토리를 삭제하시겠습니까?"
        confirmText="삭제"
        cancelText="취소"
        onConfirm={() => {
          setHistory([]);
          localStorage.removeItem("csmentor-history");
        }}
      />
    ));
  };

  const handleDeleteItem = (index) => {
    overlay.open(({ isOpen, close }) => (
      <ConfirmModal
        isOpen={isOpen}
        close={close}
        message="이 항목을 삭제하시겠습니까?"
        confirmText="삭제"
        cancelText="취소"
        onConfirm={() => {
          const newHistory = [...history];
          newHistory.splice(index, 1);
          setHistory(newHistory);
          localStorage.setItem("csmentor-history", JSON.stringify(newHistory));
        }}
      />
    ));
  };

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
