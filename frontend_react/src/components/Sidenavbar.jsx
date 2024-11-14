import { Link } from "react-router-dom"

function Sidenavbar() {
  return (
    <div className="bg-slate-100 w-[18%]  z-10 h-screen pt-14 fixed top-0">
        <div className="h-full bg-zinc-900 overflow-auto px-4 pt-3 ">
            <button className="side_nav_btn"><Link to="/log_in"><i className="fa-solid fa-house side_nav_icon"></i>Home</Link></button>
            <button className="side_nav_btn"><i className="fa-solid fa-fire side_nav_icon"></i>Popular</button>
            <hr className="my-4 w-11/12 mx-auto rounded border-zinc-700" />
        </div>
    </div>
  )
}

export default Sidenavbar