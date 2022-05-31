import React from "react";
import {Link} from "react-router-dom";

function Blogtext (){
    return(
        <div>
            <div className="row mb-5">
                <div className="index-head">
                    <h3>Blog</h3>
                </div>
                <div className="col-lg-6">
                    <div className="blog-box">
                        <h6>Bem Metadolojisi</h6>
                        <p>BEM (Block Element Modifier) css metodolojisidir.
                            Bir stil adlandırma kuralıdır. 2009 yılında Yandex...</p>

                        <Link to="/Detay">
                            <span>Devamı</span>
                        </Link>

                        
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="blog-box">
                        <h6>Dom Yapısı</h6>
                        <p>BEM (Block Element Modifier) css metodolojisidir.
                            Bir stil adlandırma kuralıdır. 2009 yılında Yandex...</p>
                        <Link to="/Detay2">
                            <span>Devamı</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Blogtext;