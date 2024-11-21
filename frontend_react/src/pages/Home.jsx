
import Topnavbar from "../components/Topnavbar"
import Sidenavbar from "../components/Sidenavbar"
import Popular from "../components/Popular"
import Content from "../components/Content"
import CreateCommu from "../components/CreateCommu"

import { useState } from "react"


export default function Home() {
  const [openCC,setOpenCC ] = useState("flex")
  return (
    <>
      <div className="bg-zinc-700 h-screen flex z-30">
          <Topnavbar/>
          <Sidenavbar props={{openCC,setOpenCC}}/>
          <Content/>
          <Popular/>
          <CreateCommu props={{openCC,setOpenCC}}/>
        </div>
    </>
   
  )
}
