import {GrClose} from "react-icons/gr";

function Pop (){
    return(
        <div>
            <div className="pop" id="popDiv">
                <p>hi@sercangezek.com</p>
                <span>adresinden bana ulaşabilirsiniz.</span>
                <button className="pop-close" onClick="hideFunction()">
                    <GrClose />
                </button>
            </div>
        </div>
    )
}
function hideFunction() {
    var x = document.getElementById("popDiv");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}



export default Pop;

