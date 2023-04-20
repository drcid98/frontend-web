import React from 'react';
import Navbar from './Navbar';
import './Layout.css'

function Layout(props) {
  return (
    <div>
      <Navbar />
        <div className="page-content">
          {props.children} 
        </div>
    </div>
  );
}

export default Layout;