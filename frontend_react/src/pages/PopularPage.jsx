import Topnavbar from "../components/Topnavbar"
import Sidenavbar from "../components/Sidenavbar"
import Popular from "../components/Popular"
import Content from "../components/Content"

function PopularPage() {
  return (
    <div className="bg-zinc-700 h-screen flex z-30">
          <Topnavbar/>
          <Sidenavbar/>
          <Content/>
          <Popular/>
        </div>
  )
}

export default PopularPage