import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ToastContainer } from '../styles/styledComponents';
import { hideToast } from '../redux/appReducer/action';

export const Toast: React.FC = () => {
  const dispatch = useDispatch();
  const toast = useSelector((state: any) => state.app.toast);

  useEffect(() => {
    if (toast.visible) {
      const timer = setTimeout(() => {
        dispatch(hideToast());
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [toast.visible, dispatch]);

  if (!toast.visible) return null;

  return (
    <ToastContainer $type={toast.type}>
      {toast.message}
    </ToastContainer>
  );
};
