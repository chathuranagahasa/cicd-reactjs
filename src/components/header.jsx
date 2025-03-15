import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
function Header(){

    const menu_main = {width: '100%', height:'40px', 'background-color':'#FF2400'}
    const menu_main_li = {float: 'left', 'list-style':'none', padding:5, color:'#fff'}


    return(
<div>
    <ul style={menu_main}>
        <li style={menu_main_li}><Link to="/">Home</Link></li>
        <li style={menu_main_li}><Link to="/about">About</Link></li>
        <li style={menu_main_li}><Link to="/contact">Contact</Link></li>
    </ul>
</div>
)
  }
  export default Header;
