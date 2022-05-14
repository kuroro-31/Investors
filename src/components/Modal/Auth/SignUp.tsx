import { Button, Flex, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { ModalView } from "../../../atoms/authModalAtom";
import { auth } from "../../../firebase/clientApp";
import { FIREBASE_ERRORS } from "../../../firebase/errors";
import InputItem from "../../Layout/InputItem";

type SignUpProps = {
  toggleView: (view: ModalView) => void;
};

const SignUp: React.FC<SignUpProps> = ({ toggleView }) => {
  const [form, setForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [formError, setFormError] = useState("");
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const [createUserWithEmailAndPassword, _, loading, authError] =
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  useCreateUserWithEmailAndPassword(auth);

  // --------------------------------------
  // NOTE フォームのチェックの後、firebaseに送る
  // --------------------------------------
  // eslint-disable-next-line consistent-return
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (formError) setFormError("");

    if (!form.email.includes("@")) {
      return setFormError("Please enter a valid email");
    }

    if (form.password !== form.confirmPassword) {
      return setFormError("Passwords do not match");
    }

    if (form.password.length <= 6) {
      return setFormError("Password should be at least 6 characters");
    }

    // Valid form inputs
    void createUserWithEmailAndPassword(form.email, form.password);
  };

  const onChange = ({
    target: { name, value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={onSubmit}>
      <InputItem
        name="email"
        placeholder="email"
        type="text"
        mb={2}
        onChange={onChange}
      />
      <InputItem
        name="password"
        placeholder="password"
        type="password"
        mb={2}
        onChange={onChange}
      />
      <InputItem
        name="confirmPassword"
        placeholder="confirm password"
        type="password"
        onChange={onChange}
      />

      {/* NOTE エラー */}
      <Text textAlign="center" mt={2} fontSize="10pt" color="red">
        { // 送信前チェックエラー、またはfirebaseのエラー
          formError || FIREBASE_ERRORS [authError ?.message as keyof typeof FIREBASE_ERRORS]
        }
      </Text>

      <Button
        width="100%"
        height="36px"
        mb={2}
        mt={2}
        type="submit"
        isLoading={loading}
      >
        Sign Up
      </Button>
      <Flex fontSize="9pt" justifyContent="center">
        <Text mr={1}>Have an account?</Text>
        <Text
          color="blue.500"
          fontWeight={700}
          cursor="pointer"
          onClick={() => toggleView("login")}
        >
          LOG IN
        </Text>
      </Flex>
    </form>
  );
};
export default SignUp;
