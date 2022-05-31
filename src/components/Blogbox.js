import React from "react";
import {Link} from 'react-router-dom'

function Blogbox(props) {
    return(
            <div className="col-lg-6">
                <div className="blog-box">
                    <h3>{props.baslik} {props.baslik2}</h3>
                    <p>{props.icerik} {props.icerik2}</p>
                    <span>
                        <Link to="/Detay">
                            {props.link1}
                        </Link>
                    </span>
                    <span>
                        <Link to="/Detay2">
                            {props.link2}
                        </Link>
                    </span>
                </div>
            </div>
    )
}
export default Blogbox;