import React from 'react';
import { Router } from '@reach/router'
import Home from './Home';
import { GlobalStyle } from './styles/GlobalStyle';
import NotFound from './NotFound';
import TopHeader from './elements/TopHeader';

function App() {
  return (
    <>
      <TopHeader />
      <Router>
        <Home path="/" />
        <NotFound default />
      </Router>
      <GlobalStyle />
    </>
  );
}

export default App;
