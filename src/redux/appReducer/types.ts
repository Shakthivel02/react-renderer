export interface Entity {
  id: string;
  [key: string]: any;
}

export interface ToastState {
  message: string;
  type: 'success' | 'error';
  visible: boolean;
}

export interface AppState {
  entities: Record<string, Entity[]>;
  toast: ToastState;
}
