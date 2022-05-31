import React from "react";
//import Resim from '../img/ref-1.png'
function Works (){
    return(
        <div>

            <div className="row">
                <div className="index-head">
                    <h3>İşler</h3>
                </div>
                <div className="col-lg-3 col-6">
                    <div className="works-box">
                        <img src={require('../img/ref-1.png')} className="img-fluid" alt=""/>
                    </div>
                </div>
                <div className="col-lg-3 col-6">
                    <div className="works-box">
                        <img src={require('../img/ref-4.png')} className="img-fluid" alt=""/>
                    </div>
                </div>
                <div className="col-lg-3 col-6">
                    <div className="works-box">
                        <img src={require('../img/ref-2.png')} className="img-fluid" alt=""/>
                    </div>
                </div>
                <div className="col-lg-3 col-6">
                    <div className="works-box">
                        <img src={require('../img/ref-3.png')} className="img-fluid" alt=""/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Works;