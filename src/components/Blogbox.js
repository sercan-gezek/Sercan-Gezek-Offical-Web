function Blogbox(props) {
    return(
            <div className="col-lg-6">
                <div className="blog-box">
                    <h3>{props.baslik} {props.baslik2}</h3>
                    <p>{props.icerik} {props.icerik2}</p>
                    <span>
                        <a href="/Detay">
                            {props.link1}
                        </a>
                    </span>
                    <span>
                        <a href="/Detay2">
                            {props.link2}
                        </a>
                    </span>
                </div>
            </div>
    )
}
export default Blogbox;