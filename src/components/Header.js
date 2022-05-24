import anaLogo from "./img/hamburger-menu.svg";

function Header (){
    return(
        <div>
            <div className="menu">
                <button>
                    <img className={classes.logo} src={anaLogo} alt="Logo" />
                </button>
            </div>
        </div>
    )
}
export default Header;