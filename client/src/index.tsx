import React from 'react';
import { render } from 'react-dom';

const App: React.FC = () => (
  <main>
    <h1>Hello World</h1>
    <p>This is a starter of an React application.</p>
  </main>
);

render(<App />, document.getElementById('root'));
