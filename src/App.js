import Header from './components/Header';
import { Routes, Route, Link } from "react-router-dom";
import Maintext from "./components/Maintext";
import Biotext from "./components/Biotext";
import Works from "./components/Works";
import Pop from "./components/Pop";
import Biodetail from "./components/Biodetail";
import Blogbox from "./components/Blogbox";





//Burası tüm sayfalarda görünecek componentler START
function App() {
    return (
        <div className="App">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <Header/>
                        <Pop/>
                    </div>
                </div>
            </div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="blog" element={<Blog />} />
                <Route path="detay" element={<Detay />} />
                <Route path="detay2" element={<Detay2 />} />
            </Routes>
        </div>
    );
}
//Burası tüm sayfalarda görünecek componentler END


//ANASAYFA
function Home() {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <Maintext/>
                        <Biotext/>
                        <Works/>
                        <div className="row">
                            <div className="index-head">
                                <h3>Blog</h3>
                            </div>
                            <Blogbox baslik = "Bem Metadolojisi" icerik = "BEM (Block - Element - Modifier) metodolojisi scalable ve maintain edilebilir css yazmak yandex için tarafından ortaya atılan isimlendirme standartıdır..." link1 = "Devamı"/>
                            <Blogbox baslik2 = "React'e Giriş" icerik2 = "React.js uzantısından da anlaşılacağı üzere Javascript üzerine kurulmuştur. Yazılım geliştirici açısından tekrar okunabilir ve üzerinde kolay geliştirme yapılabilir bir sistemdir..." link2 = "Devamı"/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

//HAKKIMDA
function About() {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <Maintext/>
                        <Biodetail/>
                    </div>
                </div>
            </div>

        </>
    );
}

//BLOG
function Blog() {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="blog-head">
                            <h1>SERCAN GEZEK</h1>
                        </div>
                        <div className="image-content">
                            <img src="http://www.sercangezek.com/blog-profile.png" alt=""/>
                        </div>
                        <div className="index-head">
                            <h3>Blog</h3>
                        </div>
                    </div>
                    <div className="row">
                        <Blogbox baslik = "Bem Metadolojisi" icerik = "BEM (Block Element Modifier) css metodolojisidir.
                        Bir stil adlandırma kuralıdır. 2009 yılında Yandex..." link1 = "Devamı"/>
                        <Blogbox baslik2 = "React'e Giriş" icerik2 = "test içerik" link2 = "Devamı"/>
                    </div>
                </div>
            </div>
        </>
    );
}

//BLOGDetail
function Detay() {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="blog-head">
                        <div className="blog-detail-head">
                            <h3>React Nedir?</h3>
                        </div>
                        </div>
                        <div className="image-content">
                            <img src="http://www.sercangezek.com/blog-profile.png" alt=""/>
                        </div>
                    </div>
                        <div className="col-lg-12">
                            <div className="blog-detail-content">
                                <p>
                                    BEM (Block - Element - Modifier) metodolojisi scalable ve maintain edilebilir css yazmak yandex için tarafından ortaya atılan isimlendirme standartıdır. BEM'in temeli component bazlı ve tekrar kullanılabilir css kodu yazmaya dayanır.

                                    İsimlendirme programlama dünyasında her zaman zor ve kafa karıştırcı olmuştur. Hal böyle olunca zaman zaman bu konuyu ihmal edebiliyoruz. Bu da uzun vadede kodumuzun kalitesini ve okunabilirliğini olumsuz etkileyebilir. Özellikle css yazarken gerekli özveriyi göstermediğimiz durumlarda code base'imiz çöplüğe dönüşebiliyor. BEM daha okunabilir, yönetilebilir ve HTML ile doğrudan ilişkili CSS kodu yazmak için uyguladığımız metodolojidir.
                                    <br/><br/>
                                    BEM Block, Element, Modifier olmak üzere 3 adet konsepte dayanır. Bu konseptleri kısaca açıklayalım.
                                    <br/><br/>
                                    Block: Uygulamanızdaki yeniden kullanılabilir bileşen topluluğudur. Örneğin card, footer, menu, form block grubuna dahil edilebilir.
                                    <br/><br/>
                                    Element: Block içerisinde bulunan ve block'tan ayrı kullanılmayan child bileşenlerdir. Element oluşturmak için iki adet alt çizgi kullanılır. Örneğin .card__image, .menu__item, .form__label gibi...
                                    <br/><br/>
                                    Modifier: Block veya Element'lerin farklı varyasyonlarını üretmek için kullanılır. Modifier oluşturmak için iki kısa çizgi kullanılır. Örneğin .card--vertical, .menu__item--active gibi...
                                    <br/><br/>
                                    Formülize edecek olursak BEM metodolojisine uygun bir element .[block]__[element]--[modifier] şeklinde isimlendirilebilir.
                                    <br/><br/>
                                </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
//BLOGDetail
function Detay2() {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="blog-head">
                            <div className="blog-detail-head">
                                <h3>asda Nedir?</h3>
                            </div>
                        </div>
                        <div className="image-content">
                            <img src="http://www.sercangezek.com/react-img.png" alt=""/>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="blog-detail-content">
                            <p>React.js uzantısından da anlaşılacağı üzere Javascript üzerine kurulmuştur. Yazılım geliştirici açısından tekrar okunabilir ve üzerinde kolay geliştirme yapılabilir bir sistemdir.
                                <br/> <br/>
                                Komponent yapısı sayesinde kod tekrarını önler kullanıcı tarafında gözle görülür farklar ortaya çıkar.
                                <br/> <br/>
                                React.js kullanmıyorsanız web siteniz DOM'u güncellemek için HTML kullanır. Yüksek trafikli web sitelerinde HTML DOM kullanmak büyük maliyetlere sebep olur.
                                <br/> <br/>
                                React.js Virtual Dom yapısı sadece güncellenecek kısmı yeniler, bütün sayfayı yenilemek küçük bir alanı yenilemekten çok daha performanslı ve düşük maliyetlidir.
                                <br/> <br/>
                                React.js'in çok fazla avantajı bulunmaktadır ama her web projesinde kullanılması gerekmez, örneğin düşük trafikli basit tanıtım sitelerinde React.js kullanmanın çok fazla bir artısı yoktur, yüksek trafikli etkileşimi yüksek web sayfalarında artık olmazsa olmaz bir durum teşkil etmektedir.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
