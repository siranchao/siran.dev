"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useRef,
  useState,
} from "react";

type ModalContextValue = {
  showModal: (message: string) => void;
};

const ModalContext = createContext<ModalContextValue | null>(null);

export function useGlobalModal() {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useGlobalModal must be used within ModalProvider");
  }
  return context;
}

export default function ModalProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [message, setMessage] = useState("");

  const showModal = useCallback((nextMessage: string) => {
    setMessage(nextMessage);
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (!dialog.open && typeof dialog.showModal === "function") {
      dialog.showModal();
      return;
    }

    if (!dialog.open) {
      dialog.setAttribute("open", "");
    }
  }, []);

  const contextValue = useMemo(() => ({ showModal }), [showModal]);

  return (
    <ModalContext.Provider value={contextValue}>
      {children}
      <dialog ref={dialogRef} className="modal">
        <form
          method="dialog"
          className="modal-box flex h-[150px] items-center justify-center rounded-md bg-base-200 text-center dark:bg-gray-800"
        >
          <button
            type="submit"
            aria-label="Close"
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </button>
          <p className="text-sm font-semibold text-gray-600 dark:text-gray-400">
            {message}
          </p>
        </form>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </ModalContext.Provider>
  );
}
