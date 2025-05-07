import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/layout";
import Home from "./pages/home";
import Men from "./pages/men";
import Women from "./pages/women";
import Kids from "./pages/kids";
import Blogs from "./pages/blog";


const App = () => {
    return (
       <>
       
       <BrowserRouter>
       <Routes>
       <Route path="/" element={<Layout/>}>
       <Route index element={<Home/>}/>
       <Route path="/home" element={<Home/>}/>
       <Route path="/men" element={<Men/>}/>
       <Route path="/women" element={<Women/>}/>
       <Route path="/kids" element={<Kids/>}/>
       <Route path="/blogs" element={<Blogs/>}/>
        </Route>
       </Routes>
        </BrowserRouter>
       
       
       </>
    );
}
export default App;
