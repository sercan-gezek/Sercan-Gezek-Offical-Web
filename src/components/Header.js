import React,{useState} from 'react'
import {AiOutlineMenu} from "react-icons/ai";
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
                        <router>
                    <p>ANASAYFA</p>
                    <p>HAKKIMDA</p>
                    <p>BLOG</p>
                        </router>
                </div>:null
                }
            </div>





        </div>
    )
}
export default Header
