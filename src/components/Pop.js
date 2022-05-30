import React,{useState} from 'react';
import {GrClose} from "react-icons/gr";
const Pop = () => {
    const[show,setShow]=useState(true);

    return(
        <div>{
            show?
            <div className="pop" id="popDiv">
                <p>hi@sercangezek.com</p>
                <span>adresinden bana ulaşabilirsiniz.</span>
                <button className="pop-close" onClick={()=>setShow(!show)}>
                    <GrClose />
                </button>
            </div>:null
        }
        </div>
    )
}

export default Pop;

