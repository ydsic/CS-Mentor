export default function ConfirmModal({
  close,
  isOpen,
  onConfirm,
  message = "정말로 진행하시겠습니까?",
  confirmText = "Yes",
  cancelText = "No",
}) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black/80 flex justify-center items-center z-50 rounded-lg shadow-lg p-6 w-full">
      <div className="flex flex-col gap-8 bg-white p-6 rounded-xl shadow-xl max-w-md w-full">
        <h3 className="text-lg font-semibold mb-4">{message}</h3>
        <div className="flex justify-end gap-4">
          <button
            onClick={() => {
              close(true);
            }}
            className="px-4 py-2 rounded bg-gray-200 text-gray-700 hover:bg-gray-300 cursor-pointer"
          >
            {cancelText}
          </button>
          <button
            onClick={() => {
              onConfirm();
              close(close);
            }}
            className="px-4 py-2 rounded bg-red-500 text-white hover:bg-red-600 cursor-pointer"
          >
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  );
}
