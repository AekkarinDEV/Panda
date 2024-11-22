import { Link } from "react-router-dom"


function Sidenavbar({props}) {
  function openCCmenu() {
    props.setOpenCC(props.openCC = "flex")
  }

  
  return (
    <div className="bg-zinc-900 w-[18%]  z-10 h-screen pt-14 fixed top-0 hidden ">
        <div className=" bg-zinc-900 overflow-auto px-4 pt-3 ">
            <button className="side_nav_btn"><Link to="/"><i className="fa-solid fa-house side_nav_icon"></i>Home</Link></button>
            <button className="side_nav_btn"><Link to="/popular"><i className="fa-solid fa-fire side_nav_icon"></i>Popular</Link></button>
            <hr className="my-4 w-11/12 mx-auto rounded border-zinc-700" />
        </div>

        <div className="px-4 ">
          <button className="side_nav_btn" onClick={openCCmenu}><i className="fa-solid fa-plus pr-1"></i> Create a community</button>

        </div>
    </div>
  )
}

export default Sidenavbar