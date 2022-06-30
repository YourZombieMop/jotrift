import React, { FC, ReactElement } from 'react'
import './Footer.sass'

interface FooterProps {
  children?: React.ReactNode;
}

const Footer: FC<FooterProps> = ({
  children,
}) : ReactElement => {
  return (
    <footer className='app-footer'>
      {children}
    </footer>
  );
};

export default Footer;