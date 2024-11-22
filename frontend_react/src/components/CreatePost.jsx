

export default function CreatePost({props}) {
    const closemenu = () => {
        props.setOpenPost("hidden");
    }
  return (
    <div className={`h-screen w-screen fixed top-0 bg-black/40 z-50 ${props.openPost} justify-center items-center`}>
        <div className=" min-h-10 w-[700px] bg-zinc-800 rounded-xl px-6 py-4" onClick={closemenu}>
            <button className="absolute ml-[615px] w-10 h-10 bg-zinc-700 rounded-3xl text-xl text-zinc-400"><i className="fa-solid rotate-45 fa-plus"></i></button>
                <h1 className="text-2xl text-zinc-200 font-bold mb-3">Create new post</h1>
            <form action="" className="text-zinc-300 grid gap-2 pl-1">
                <label htmlFor="select_commu" className="block">post on:</label>
                <input type="text" id="select_commu"  name="commu" className="w-60 rounded-2xl h-9 bg-zinc-700"/>
                <label htmlFor="" className="">title:</label>
                <input type="text" className="rounded-xl w-[600px] h-9 bg-zinc-700 px-2" />
                <label htmlFor="" className="">body:</label>
                <textarea name="" id="" className="rounded-xl resize-none bg-zinc-700 w-[640px] h-[200px] px-2 py-1"></textarea>
                <div className="flex justify-end mt-5 mb-5 pr-4">
                    <button type="submit" className="bg-zinc-300 text-zinc-950 font-bold w-24 rounded-lg h-10">POST</button>
                </div>
            </form>
        </div>
    </div>
  )
}
