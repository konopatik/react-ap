import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from "react-router-dom";

ReactDOM.render(
        <App/>,
  document.getElementById('root')
);

// import ReactDOM from "react-dom";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Header from "./components/header";
// import Users from "./components/cardGroupe";
// import About from "./components/cardTwo";
//
// export default function App() {
//     return (
//         <BrowserRouter>
//             <Routes>
//                 <Route path="/" element={<Header />}>
//                     <Route  path="about" element={<About />} />
//                     <Route path="users" element={<Users />} />
//                 </Route>
//             </Routes>
//         </BrowserRouter>
//     );
// }
//
// ReactDOM.render(<App />, document.getElementById("root"));