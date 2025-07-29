import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/layout";
import Home from "./pages/home";
import Men from "./pages/men";
import Women from "./pages/women";
import Kids from "./pages/kids";
import Blogs from "./pages/blog";
import LoginPage from "./auth/login";
import SignupPage from "./auth/signup";
import MyCart from "./pages/Mycart";

import { ToastContainer } from "react-toastify";
import Search from "./pages/search";


const App = () => {
   

 

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="/home" element={<Home />} />
                        <Route path="/men" element={<Men />} />
                        <Route path="/women" element={<Women />} />
                        <Route path="/kids" element={<Kids />} />
                        <Route path="/blogs" element={<Blogs />} />
                        <Route path="/login" element={<LoginPage />}/>
                        <Route path="/signup" element={<SignupPage />}/>
                         <Route path="/cart" element={<MyCart/>}/> 
                            <Route path="/search" element={<Search/>}/> 
                    </Route>
                </Routes>
            </BrowserRouter>
           
           <ToastContainer position="top-center" autoClose={2000} />
        </>
    );
};

export default App;
