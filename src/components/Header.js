import React,{useState} from 'react';

import {AiOutlineMenu} from "react-icons/ai";
import {Link, Route, Routes} from "react-router-dom";
const Header = () => {
const[show,setShow]=useState(false);
    return (
        <div>
            <div className="menu">
                <button className="menubar" onClick={()=>setShow(!show)}>
                    <AiOutlineMenu />
                </button>

                {
                    show?<div className="menu-text">
                        <nav>
                            <Link to="/">ANASAYFA</Link>
                            <Link to="/about">HAKKIMDA</Link>
                            <Link to="/blog">BLOG</Link>
                        </nav>
                </div>:null
                }
            </div>
        </div>
    )
}

export default Header
