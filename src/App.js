import Header from './components/Header';
import { Routes, Route, Link } from "react-router-dom";
import Maintext from "./components/Maintext";
import Biotext from "./components/Biotext";
import Works from "./components/Works";
import Blogtext from "./components/Blogtext";
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
                        <Blogtext/>
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
                        <Blogbox/>
                        <Blogbox/>
                        <Blogbox/>
                        <Blogbox/>
                    </div>
                </div>
            </div>

        </>
    );
}

export default App;
