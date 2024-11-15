import { Link } from "react-router-dom"

function Topnavbar() {
  return (
    <div className="bg-zinc-800 h-14 fixed top-0 z-40 w-screen">
        <div className="h-0.5 bg-zinc-400"></div>
        <div className="grid grid-cols-3 h-full">

            <div className="h-full pl-3 flex items-center">
                <div className="h-full w-14 mr-2">
                    <img src="panda_logo.png" alt="pand_logo"/>
                </div>
                <h1 className="text-zinc-200 font-sourGummy text-3xl font-semibold">PANDA</h1>
            </div>

            <div className="flex items-center">
                <i className="fa-solid fa-magnifying-glass absolute pl-4 text-zinc-800"></i>
                <form action="" method="" className="w-full">
                    <input type="text" name="search_input" placeholder="Search on Panda"
                    className="w-full h-9 rounded-full bg-zinc-400 pl-10 pr-3 focus:outline-none caret-zinc-500 
                    hover:bg-zinc-300 text-zinc-600 placeholder-zinc-600"  />
                </form>
            </div>
   
            <div className="flex justify-end pr-10 items-center gap-4">
                <button className="bg-zinc-200 h-10 px-4 rounded-3xl hover:bg-zinc-400 hover:text-zinc-200 duration-100 font-semibold">
                     <Link to={"log_in"}>Log in</Link>
                </button>
                <button className="hover:bg-zinc-700 h-10 w-10 rounded-3xl text-3xl duration-150"><p className=" w-10 text-zinc-200 text-center">•••</p></button>
            </div>
        </div>
    </div>
  )
}

export default Topnavbar