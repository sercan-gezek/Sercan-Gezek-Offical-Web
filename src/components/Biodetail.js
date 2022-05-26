import {DiSass} from "react-icons/di";
import {FaReact, FaVuejs} from "react-icons/fa";
import {CgFigma} from "react-icons/cg";

function Biodetail() {
    return(
        <div>
            <section className="detailtext">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-12">
                            <img src="https://sercangezek.com/profile-sg.png" alt=""/>
                        </div>
                        <div className="col-lg-9 col-12">
                            <p>Teknoloji ile tanışmam 2006 yılında windows platformda HTML kodları yazarak ve tasarım programları kullanarak başladı. Hobi olarak başladığım bu yolculuğu profesyonelleştirmek adına Türkiye'nin en iyi eğitim kurumlarının birinde eğitim aldım. <br/><br/>

                                Güzel Sanatlar Fakültesi İletişim ve Tasarım bölümünden mezun oldum, aynı alanda tezli yüksek lisans derecemi aldım. İş hayatıma bir reklam ajansında başladım, ardından kurumsal firmalarda Grafik Tasarımcı, Ön Yüz Geliştirici (Front-End Developer), Arayüz Tasarımcısı pozisyonlarında görev aldım. Bir üniversitede Öğretim Görevlisi olarak ders vermekteyim, kariyerime Baykar Savunma'da Front-End Developer olarak devam etmekteyim. Aynı zamanda dijital platformlarda eğitim videoları yayınlamaktayım.</p>
                        </div>
                        <div className="col-lg-12 col-12">
                            <div className="social-content">
                                <div className="social-box">
                                    <DiSass/>
                                </div>
                                <div className="social-box">
                                    <FaReact/>
                                </div>
                                <div className="social-box">
                                    <FaVuejs/>
                                </div>
                                <div className="social-box">
                                    <CgFigma/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Biodetail;