function TopCommu() {
  return(
    <>
      <div className="flex pl-5 bg-zinc-800 py-2 items-center gap-1 ">
        <img src="profile-icon-design-free-vector.jpg" alt="" className="h-8 w-8 rounded-full"/>
        <div>
          <h3 className="text-zinc-300">p/Pandacommu</h3>
          <p className="text-xs text-zinc-400">100000 member</p>
        </div>
      </div>
    </>
  )
}

function Popular() {
  return (
    <div className="w-3/12 h-screen top-0  right-0 fixed bg-zinc-900 pt-20 pl-3 pr-20 hidden">
      <div className="w-full bg-zinc-800 px-4 py-2 rounded-lg">
        <h2 className="mb-4 text-zinc-200">Popular Communities</h2>
        <TopCommu/>
        <TopCommu/>
        <TopCommu/>
        <TopCommu/>
        <TopCommu/>
      </div>
    </div>
  )
}

export default Popular