

function Post( { post_key }) {
  return (
    <div className="bg-zinc-800 rounded-lg mb-3 px-4 py-2  m-auto w-2/4 grid gap-2">
        <div className="flex">
            <div className="flex w-1/2">
                <img src="panda_logo.png" alt="commu_profile" className="h-7 pr-1" />
                <a className="text-zinc-300 mr-2">p/Pandacommu</a>
                <p className="text-sm text-end text-zinc-500">• 5 hr.ago</p>
            </div>
            <div className="flex justify-end w-1/2 gap-2">
                <button className="bg-zinc-300 rounded-2xl px-2 text-xs font-bold">join</button>
                <button>•••</button>
            </div>
        </div>

        <div>
            <h2 className="font-semibold text-2xl text-zinc-200">Saw a girl die on the road last night</h2>
            <p className="text-gray-400">I (34f) am at Koh Lanta and had a great day yesterday with snorkeling and swimming in caves. Decided to go for a bite and a drink with a few people from the tour, we were having a great time, untill something happened.
                A young (early twenties) girl fell with her scooter, with her head on the road without helmet. She was not breathing, so one of my group started to do CPC despite many blood everywhere. When the ambulance came, they just put her in, and stopped doing CPR altogether and gave her up.</p>
        </div>

        <div className="w-full flex gap-2">
            <div className="w-fit grid grid-cols-3 items-center bg-zinc-700 rounded-3xl">
                <button className="rounded-3xl hover:bg-zinc-500 w-8 h-8 fa-lg">
                    <i className="fa-regular fa-thumbs-up"></i>
                </button>
                <p className="text-center text-xs font-semibold">5.6k</p>
                <button className="rounded-3xl hover:bg-zinc-500 w-8 h-8 fa-flip-vertical fa-lg ">
                    <i className="fa-regular fa-thumbs-up">
                    </i>
                </button>
            </div>

            <button className="flex items-center gap-1 w-16 justify-center bg-zinc-700 rounded-3xl">
                <i className="fa-regular fa-comment"> </i>
                <p>0</p>
            </button>

            <button className="flex items-center gap-1 w-20 justify-center bg-zinc-700 rounded-3xl">
            <i className="fa-solid fa-share"></i>
            <p>share</p>
            </button>
        </div>
    </div>
  )
}

export default Post