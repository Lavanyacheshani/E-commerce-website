import { Outlet } from "react-router-dom"
import Footer from "../components/Footer/footer"
import Header from "../components/Header/Header"

const MainLayout = () => {
  return (
    <div className=" overflow-hidden w-screen h-screen">
        <Header/>
        <Outlet/>
        
        <Footer/>
      
    </div>
  )
}

export default MainLayout
