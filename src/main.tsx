import React from 'react';
import ReactDOM from 'react-dom';
import { styles } from './styles/styles';
import RootImage from './components/rootImage';
import Card from './components/card';

const App: React.FC = () => {
  return (
    <div style={styles.root}>
      <RootImage />
      <Card title="hello" text="text" />
      <Card title="hello" text="text" />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
