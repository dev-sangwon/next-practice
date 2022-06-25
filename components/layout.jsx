import React from 'react';
import Nav from './Nav';

function layout({children}) {
  return (
    <>
        <div>
            <Nav />
            {children}
        </div>
    </>
  )
}

export default layout