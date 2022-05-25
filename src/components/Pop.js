import {GrClose} from "react-icons/gr";

function Pop (){
    return(
        <div>
            <div className="pop">
                <p>hi@sercangezek.com</p>
                <span>adresinden bana ulaşabilirsiniz.</span>
                <button className="pop-close">
                    <GrClose />
                </button>
            </div>
        </div>
    )
}

export default Pop;

