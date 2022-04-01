import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/header";
import Main from "./components/main";
import './App.css'
import Footer from "./components/footer";
import {  Routes, Route } from "react-router-dom";
import OneCard from "./components/card";
import CardGroupe from "./components/cardGroupe";

function App() {
  return (
        <div className="App">
          <Header/>
          {/*<Main/>*/}
            <Routes>
                <Route path="/" element={<Main />}>
                    {/*<Route path="one" element={<OneCard />} />*/}
                    <Route path="read" element={<CardGroupe />} />
                </Route>
            </Routes>
          <Footer />
        </div>
  );
}

export default App;
