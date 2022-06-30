import React, { FC, ReactElement } from 'react'
import './Header.sass'

interface HeaderProps {
  children?: React.ReactNode;
}

const Header: FC<HeaderProps> = ({
  children,
}) : ReactElement => {
  return (
    <header className='app-header'>
      {children}
    </header>
  );
};

export default Header;