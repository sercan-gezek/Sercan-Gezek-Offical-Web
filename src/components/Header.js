import React,{useState} from 'react'
import {AiOutlineMenu} from "react-icons/ai";
const Header = () => {
const[show,setShow]=useState(true);
    return (
        <div>
            <div className="menu">
                <button className="menubar" onClick={()=>setShow(!show)}>
                    <AiOutlineMenu />
                </button>

                {
                    show?<div className="menu-text">
                    <p>ANASAYFA</p>
                    <p>HAKKIMDA</p>
                    <p>BLOG</p>
                </div>:null
                }
            </div>





        </div>
    )
}
export default Header