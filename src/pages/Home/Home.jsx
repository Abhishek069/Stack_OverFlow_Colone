import React from "react";
import '../../App.css'
import HomeMainbar from '../../components/HomeMainbar/HomeMainbar'
import RightSidebar from '../../components/RightSideBar/RightSideBar'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
const Home =() => {
    return (
        <div className="home-container-1">
            <LeftSidebar/>
            <div className="home-container-2">
                <HomeMainbar />
                <RightSidebar />

            </div>


        </div>
    )
}
export default Home