import Topnavbar from "../components/Topnavbar"
import Sidenavbar from "../components/Sidenavbar"
import Popular from "../components/Popular"
import Content from "../components/Content"


export default function Home() {
  return (
    <>
        <Topnavbar/>
     <div className="bg-zinc-700 h-screen flex z-30">
        <Sidenavbar/>
        <div className="w-[82%] flex">
          <Content/>
          <Popular/>
        </div>
        


    </div>
    </>
   
  )
}
