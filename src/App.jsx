import { Stack, Text } from '@chakra-ui/layout';
import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import Layout from './Layout';
import Feed from './pages/Feed';

function App() {
  return (
    <Layout>
      <Switch>
        <Route exact component={Feed} path="/"></Route>
        <Redirect to="/" />
      </Switch>
    </Layout>
  );
}

export default App;
