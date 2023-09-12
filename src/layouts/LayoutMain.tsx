import React, { Fragment } from 'react';
import AppBar from './AppBar';
interface ILayoutMainProps {
  children?: React.ReactNode;
}
const LayoutMain = ({ children }: ILayoutMainProps) => {
  return (
    <Fragment>
      <AppBar></AppBar>
      {children}
    </Fragment>
  );
};

export default LayoutMain;
