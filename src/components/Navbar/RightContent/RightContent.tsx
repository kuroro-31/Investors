import { Flex } from '@chakra-ui/react';
import React from 'react';
import AuthButtons from './AuthButtons';

type RightContentProps = {
  // user: any
};

const RightContent:React.FC<RightContentProps> = () => {
  
  return (
    <>
    {/* <AuthModal /> */}
    <Flex justifyContent="space-between" alignItems="center">
        <AuthButtons />
        {/* <MenuWrapper /> */}
      </Flex>
    </>
  )
}
export default RightContent;