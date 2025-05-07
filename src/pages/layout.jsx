import { Outlet } from "react-router-dom";
import TopNav from "../components/topnav";
import Footer from "../components/footer";



const Layout=()=>{

  return(
    <>
    <TopNav/>
     
    <Outlet/>
    <Footer/>

    </>
  )
}
export default Layout;