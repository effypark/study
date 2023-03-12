import React from 'react';
import { useDispatch } from 'react-redux';
import { openModal } from '../store/modules/modalSlice';
import Modal from '../Components/Modal';

const ModalTest: React.FunctionComponent = () => {

    const dispatch = useDispatch();

    const handleOpenModal = () => {
      dispatch(openModal('signup'));
    };
  
    return (
      <div>
        <button onClick={handleOpenModal}>Sign Up</button>
        <Modal
          title="Sign Up"
          content={<form>Sign up form goes here</form>}
        />
      </div>
    );
}

export default ModalTest;