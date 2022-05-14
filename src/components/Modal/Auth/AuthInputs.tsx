import { Flex } from "@chakra-ui/react";
import React from "react";
import { useRecoilValue } from "recoil";
import { authModalState, ModalView } from "../../../atoms/authModalAtom";
import Login from "./Login";
import SignUp from "./SignUp";

type AuthInputsProps = {
  toggleView: (view: ModalView) => void;
};

// ------------------------
// NOTE 認証モーダルの入力部分
// ------------------------
const AuthInputs: React.FC<AuthInputsProps> = ({ toggleView }) => {
  const modalState = useRecoilValue(authModalState);

  return (
    <Flex direction="column" alignItems="center" width="100%" mt={4}>
      {modalState.view === "login" ? (
        <Login toggleView={toggleView} />
      ) : (
        <SignUp toggleView={toggleView} />
      )}
    </Flex>
  );
};
export default AuthInputs;
