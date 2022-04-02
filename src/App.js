import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/BaseComponents/Header/header";
import Main from "./components/BaseComponents/main";
import './App.css'
import Footer from "./components/BaseComponents/Footer/footer";
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router-dom";
import FullPost from "./components/BaseComponents/PostsComponents/fullPost";

function App() {
    return (
        <div className="App">
            <Header/>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Main/>}/>
                    {/*    <Route path  element={<IPost />} />*/}
                    <Route path="read/" element={<FullPost/>}/>
                </Routes>
            </BrowserRouter>
            <Footer/>
        </div>
    );
}

export default App;
