import { Outlet } from "react-router-dom"
import HomeMenu from "./components/home-menu"
import HomePageFooter from "./components/footer"

const HomePageLayout =() => {
    return (
        <>
        <HomeMenu/>
        <Outlet/>
        <HomePageFooter/>
        
        </>
    )
}

export default HomePageLayout;