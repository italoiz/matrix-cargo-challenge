import './styles.scss';

import React from 'react';
import { render } from 'react-dom';
import { Header } from './components/Header';
import { Languages } from './components/Languages';
import { Repositories } from './components/Repositories';
import { AppProvider } from './context';

const App: React.FC = () => (
  <AppProvider>
    <main>
      <Header />
      <article className="container">
        <Languages />
        <Repositories />
      </article>
    </main>
  </AppProvider>
);

render(<App />, document.getElementById('root'));
