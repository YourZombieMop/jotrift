import React, { FC, ReactElement } from 'react'
import './App.sass'

interface AppProps {
  children?: React.ReactNode;
}

const App: FC<AppProps> = ({
  children,
}) : ReactElement => {
  return (
    <main className='app'>
      {children}
    </main>
  );
};

export default App;