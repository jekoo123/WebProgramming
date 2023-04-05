import React from 'react';

const Header = (props) => {
  return(
      <div className='header'>
        <div>
          {props.title} Page
        </div>
        <nav>
          <a href="../pages/proposal">go</a>
        </nav>
      </div>
  );
};
export default Header