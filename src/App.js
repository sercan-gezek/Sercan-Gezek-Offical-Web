import './App.css';
import Header from './components/Header';
import Maintext from './components/Maintext';
import Biotext from './components/Biotext';
import Works from './components/Works';
import Blog from './components/Blog';
import Pop from './components/Pop';



function App() {
  return (
    <div className="App">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <Header />
                    <Maintext />
                    <Biotext />
                    <Works />
                    <Blog />
                    <Pop />
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;
