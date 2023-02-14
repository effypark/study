import { useState } from "react";
import { useLockBodyScroll } from "../custom_hook/useLockBodyScroll";

// 모달을 사용할 상위 컴포넌트

export function App() {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  return (
    <div>
      <button onClick={() => setModalOpen(true)}>Show Modal</button>
      {modalOpen && (
        <Modal title="모달 타이틀" onClose={() => setModalOpen(false)}>
          <모달 내용물 컴포넌트 />
        </Modal>
      )}
    </div>
  );
}

// 모달 컴포넌트

type ModalProps = {
  title: string;
  content: string;
  onClose: () => void;
  children: ReactNode;
};
export function Modal({ title, content, onClose, children }: ModalProps) {
  // useLockBodyScroll 호출만 하면 됨
  useLockBodyScroll();
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal">
        <h2>{title}</h2>
        {children}
      </div>
    </div>
  );
}
