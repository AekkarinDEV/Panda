

function Post( { post_key }) {
  return (
    <div className="bg-zinc-800 rounded-lg mb-3 px-4 py-2">
        <div className="flex">
            <div className="flex w-1/2">
                <img src="panda_logo.png" alt="commu_profile" className="h-7 pr-1" />
                <a className="text-zinc-300 mr-2">p/Pandacommu</a>
                <p className="text-sm text-end text-zinc-500">• 5 hr.ago</p>
            </div>
            <div className="flex justify-end w-1/2 gap-2">
                <button className="bg-zinc-300 rounded-2xl px-2 text-xs font-bold">join</button>
                <button>...</button>
            </div>
        </div>

        <div className="w-full">
            <div className="w-fit grid grid-cols-3 items-center bg-zinc-700 rounded-3xl">
                <button className="rounded-3xl hover:bg-zinc-500 px-2">up</button>
                <p className="text-center text-xs font-semibold">5.6k</p>
                <button className="rounded-3xl hover:bg-zinc-500 px-2">di</button>
            </div>
        </div>
    </div>
  )
}

export default Post