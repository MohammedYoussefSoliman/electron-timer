import React, {FC} from 'react';
import './App.scss';
import AppTheme from './theme';
import {Dashboard} from './layout';

const App:FC = () => {


  return (
    <AppTheme>
        <Dashboard />
    </AppTheme>
  );
}

export default App;
