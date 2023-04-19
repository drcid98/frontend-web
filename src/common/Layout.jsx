import React from 'react';
import Navbar from './Navbar';
import './Layout.css'

function Layout(props) {
  return (
    <div>
      <Navbar />
    {props.children} 
    </div>
  );
}

export default Layout;