export interface ModalState {
  isOpen: boolean;
  schemaName: 'addUser' | null;
  title: string;
}

export interface UIState {
  modal: ModalState;
}
