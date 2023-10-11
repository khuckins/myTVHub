import React from 'react';
import classes from './Header.module.css';

export interface IHeaderProps {
  
}

const Header = (props: IHeaderProps) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>My TV Hub</h1>
      </header>

      <div className={classes['main-image']}>

      </div>
    </React.Fragment>
  )
}

export default Header