import {
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay
} from '@chakra-ui/react'
import React from 'react'
import { useRecoilState } from 'recoil'
import { authModalState } from '../../../atoms/authModalAtom'
import AuthInputs from './AuthInputs'
import OAuthButtons from './OAuthButtons'
import ResetPassword from './ResetPassword'

const AuthModal: React.FC = () => {
  const [modalState, setModalState] = useRecoilState(authModalState)

  const handleClose = () =>
    setModalState(prev => ({
      ...prev,
      open: false
    }))

  const toggleView = (view: string) => {
    setModalState({
      ...modalState,
      view: view as typeof modalState.view,
    });
  };

  return (
    <Modal isOpen={modalState.open} onClose={handleClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader
            display='flex'
            flexDirection='column'
            alignItems='center'
          >
            {modalState.view === 'login' && 'Login'}
            {modalState.view === 'signup' && 'Sign Up'}
            {modalState.view === 'resetPassword' && 'Reset Password'}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody
            display='flex'
            flexDirection='column'
            alignItems='center'
            justifyContent='center'
            pb={6}
          >
            <Flex
              direction='column'
              alignItems='center'
              justifyContent='center'
              width='70%'
            >
             {modalState.view === "login" || modalState.view === "signup" ? (
                <>
                  <OAuthButtons />
                  OR
                  <AuthInputs toggleView={toggleView} />
                </>
              ) : (
                <ResetPassword toggleView={toggleView} />
              )}
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
  )
}
export default AuthModal
