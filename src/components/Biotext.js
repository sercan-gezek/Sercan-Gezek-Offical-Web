import React from "react";
import {Link} from 'react-router-dom'

function Biotext(){
    return(
        <div>
            <div className="biotext">
                <p>Teknoloji ile tanışmam 2006 yılında windows platformda HTML kodları yazarak ve tasarım programları kullanarak başladı. Hobi olarak başladığım bu yolculuğu profesyonelleştirmek adına Türkiye'nin en iyi eğitim kurumlarının birinde eğitim aldım. </p>
                <div className="notetext">
                    <Link to="/About">
                        <span>Devamı</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default Biotext;