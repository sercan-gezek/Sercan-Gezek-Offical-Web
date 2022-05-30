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
                            <Blogbox baslik = "Bem Metadolojisi" icerik = "BEM (Block Element Modifier) css metodolojisidir.
                        Bir stil adlandırma kuralıdır. 2009 yılında Yandex..." link1 = "Devamı"/>
                            <Blogbox baslik2 = "React'e Giriş" icerik2 = "test içerik" link2 = "Devamı"/>
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
                            <img src="http://www.sercangezek.com/react-img.png" alt=""/>
                        </div>
                    </div>
                        <div className="col-lg-12">
                            <div className="blog-detail-content">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                    <br/> <br/>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                    <br/> <br/>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                    <br/> <br/>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
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
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                <br/> <br/>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                <br/> <br/>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                <br/> <br/>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
