import home from "../assets/images/home.png"
import popular from "../assets/images/popular.png"
import profilenav from "../assets/images/profilenav.png"
import favourites from "../assets/images/favourites.png"
import create from "../assets/images/create.png"
import SideBar from './MySideBar'


function Hero({children}) {
  

  return (
    <>
      <div className=" w-full flex">
        <div className="sidebar w-1/6 h-screen bg-[#D9D9D9] bg-opacity-20  ">
          <SideBar name="Home" icon={home} />
          <SideBar name="Popular" icon={popular} />
          <SideBar name="Profile" icon={profilenav} />
          <SideBar name="Favorite" icon={favourites} />
          <SideBar name="Create" icon={create} />
        </div>
        {children}
      </div>
    </>
  );
}

export default Hero