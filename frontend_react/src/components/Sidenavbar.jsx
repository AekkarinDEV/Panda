

function Sidenavbar() {
  return (
    <div className="bg-slate-100 w-[280px]  z-10 h-screen pt-14">
        <div className="h-full bg-zinc-900 overflow-auto px-4 pt-3 ">
            <button className="side_nav_btn"><i className="fa-solid fa-house side_nav_icon"></i>Home</button>
            <button className="side_nav_btn"><i className="fa-solid fa-fire side_nav_icon"></i>Popular</button>
            <hr className="my-4 w-11/12 mx-auto rounded border-zinc-700" />
        </div>
    </div>
  )
}

export default Sidenavbar