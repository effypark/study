import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../store/modules/modalSlice';

interface ModalProps {
  title: string;
  content: JSX.Element;
}

const Modal: React.FC<ModalProps> = ({ title, content }) => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.modal.isOpen);

  const handleClose = () => {
    dispatch(closeModal());
  };

  return (
    <div className={`modal ${isOpen ? 'is-active' : ''}`}>
      <div className="modal-background" onClick={handleClose}></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">{title}</p>
          <button className="delete" onClick={handleClose}></button>
        </header>
        <section className="modal-card-body">{content}</section>
      </div>
    </div>
  );
};

export default Modal;