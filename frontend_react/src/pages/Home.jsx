import { useState, createContext } from "react"

import Topnavbar from "../components/Topnavbar"
import Sidenavbar from "../components/Sidenavbar"
import Popular from "../components/Popular"
import Content from "../components/Content"
import CreateCommu from "../components/CreateCommu"




export default function Home() {

  const [ createCommuOpen , setCreateCommuOpen ] = useState(true)


  return (
    <>
      <div className="bg-zinc-700 h-screen flex z-30">
          <Topnavbar/>
          <Sidenavbar/>
          <Content/>
          <Popular/>
          <CreateCommu/>
        </div>
    </>
   
  )
}
