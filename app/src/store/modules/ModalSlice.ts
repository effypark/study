import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ModalState {
  isOpen: boolean;
  modalType: string;
}

const initialState: ModalState = {
  isOpen: false,
  modalType: '',
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state, action: PayloadAction<string>) => {
      state.isOpen = true;
      state.modalType = action.payload;
    },
    closeModal: (state) => {
      state.isOpen = false;
      state.modalType = '';
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;