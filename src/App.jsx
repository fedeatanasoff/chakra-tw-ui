import { Stack, Text } from '@chakra-ui/layout';
import React from 'react';
import Layout from './Layout';

function App() {
  return (
    <Layout>
      <Stack direction="row">
        <Stack>
          <Text>logo</Text>
        </Stack>
      </Stack>
    </Layout>
  );
}

export default App;
