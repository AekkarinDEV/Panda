import { Link } from "react-router-dom"
import { useState } from "react"

function Topnavbar({props}) {
    const [islogin, setIsLogin] = useState(true);
    function openPostMenu() {
        props.setOpenPost(props.openPost = "flex");
      }
    function loginOrProfile(status) {
        if(!status){
            return(
            <button className="bg-zinc-200 h-10 px-4 rounded-3xl hover:bg-zinc-400 hover:text-zinc-200 duration-100 font-semibold">
                     <Link to={"/log_in"}>Log in</Link>
             </button>
            )
        }else{
            return (<>
                <button className="text-xl flex items-center text-zinc-300 border-[3px] px-3 rounded-3xl border-zinc-300" onClick={openPostMenu}>
                    <i className="fa-solid fa-plus pr-1 fa-sm mr-1"></i> 
                    <p className="pb-1 text-md font-sourGummy" >post</p>
                </button>
                <img src="profile-icon-design-free-vector.jpg" alt="" className="h-9 rounded-3xl ml-3 hidden" />
                </>)
        }
    }

  return (
    <div className="bg-zinc-800 h-14 fixed top-0 z-40 w-screen">
        <div className="h-0.5 bg-zinc-400"></div>
        <div className="grid grid-cols-2 h-full">

            <div className="h-full pl-2 flex items-center">
                <button className="h-12 w-12  md:hidden text-zinc-500"><i className="fa-solid fa-2xl fa-bars"></i></button>
                <div className="h-full w-[55px] mr-2 flex items-center">
                    <img src="panda_logo.png" alt="pand_logo" />
                </div>
                <h1 className="text-zinc-200 font-sourGummy text-3xl font-semibold">PANDA</h1>
            </div>

            <div className="flex items-center hidden">
                <i className="fa-solid fa-magnifying-glass absolute pl-4 text-zinc-800"></i>
                <form action="" method="" className="w-full">
                    <input type="text" name="search_input" placeholder="Search on Panda"
                    className="w-full h-9 rounded-full bg-zinc-400 pl-10 pr-3 focus:outline-none caret-zinc-500 
                    hover:bg-zinc-300 text-zinc-600 placeholder-zinc-600"  />
                </form>
            </div>
   
            <div className="flex justify-end pr-10 items-center gap-4">
                {loginOrProfile(islogin)}
                <button className="hidden hover:bg-zinc-700 h-10 w-10 rounded-3xl text-3xl duration-150"><p className=" w-10 text-zinc-200 text-center pb-1">•••</p></button>
            </div>
        </div>
    </div>
  )
}

export default Topnavbar