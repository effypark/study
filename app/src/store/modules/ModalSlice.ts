import { createSlice, PayloadAction } from '@reduxjs/toolkit';

//state type 선언
export interface ModalState {
  isOpen: boolean;
  modalType: string;
}

//초기화 옵션
const initialState: ModalState = {
  isOpen: false,
  modalType: '',
};

//action
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