import Modal from '@/components/Modal';
import React from 'react';
import LoginPage from '../login/page';
import LoginDetails from '@/components/auth/LoginDetails';

const LoginModal = () => {
  return (
    <Modal>
      <LoginDetails />
    </Modal>
  );
};

export default LoginModal;
