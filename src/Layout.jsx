import { Container } from '@chakra-ui/layout';
import React from 'react';

const Layout = ({ children }) => {
  return (
    <Container bg="red.300" maxW="container.md">
      {children}
    </Container>
  );
};

export default Layout;
