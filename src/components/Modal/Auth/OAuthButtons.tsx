import { Button, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { auth } from "../../../firebase/clientApp";

const OAuthButtons: React.FC = () => {
  const [signInWithGoogle, _, loading, error] = useSignInWithGoogle(auth);

  return (
    <Flex direction="column" mb={4} width="100%">
      <Button
        variant="oauth"
        mb={2}
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        onClick={() => signInWithGoogle()}
        isLoading={loading}
      >
        <Image src="/images/googlelogo.png" height="20px" mr={4} />
        Continue with Google
      </Button>
      <Button variant="oauth">Some Other Provider</Button>

      {error && (
        <Text textAlign="center" fontSize="10pt" color="red" mt={2}>
          {error}
        </Text>
      )}
    </Flex>
  );
};
export default OAuthButtons;
