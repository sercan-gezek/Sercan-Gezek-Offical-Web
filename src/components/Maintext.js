import {AiOutlineGithub} from "react-icons/ai";
import {SiLinkedin} from "react-icons/si";
import {BsTwitter} from "react-icons/bs";

function Maintext(){
    return(
        <div>
            <div className="main">
                <h1>SERCAN GEZEK</h1>
                <p>Front-End Developer - UI Designer</p>
                <div className="social-icons">
                    <div className="social-icon-box">
                        <a href="#">
                            <AiOutlineGithub />
                        </a>
                    </div>
                    <div className="social-icon-box">
                        <a href="#">
                            <SiLinkedin />
                        </a>
                    </div>
                    <div className="social-icon-box">
                        <a href="#">
                            <BsTwitter />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Maintext;