import { useState} from "react"


function CreateCommu() {

    const [ createCommuOpen , setCreateCommuOpen ] = useState(true)
        if(createCommuOpen == true){
            return (
                <div className="h-screen w-screen fixed bg-black/50 top-0 z-50 flex justify-center items-center text-white ">
                    <div className="bg-zinc-900 h-fit w-2/4 px-8 py-6 rounded-lg shadow-xl shadow-black">
                        <div className="flex">
                            <div className="w-10/12">
                                <h3 className="text-2xl">Tell us about your community</h3>
                                <p className="text-sm">A name and description help people understand what your community is all about.</p>
                            </div>
                            <div className="w-2/12 flex justify-end">
                                <button className="rounded-full bg-zinc-800 w-10 h-10 text-zinc-400" 
                                onClick={setCreateCommuOpen(false)}><i className="fa-solid rotate-45 fa-plus"></i></button>
                            </div>
                        </div>
                        
                        <div className="flex pb-11">
                            <div className="w-2/3 pr-10 mt-3">
                                <form action="/" className="grid grid-cols-1 text-zinc-300 gap-1">
                                    <label htmlFor="" className="text-lg text-zinc-300">community name:</label>
                                    <input type="text" className="rounded-xl px-3 text-md py-2 bg-zinc-700"  />
                                    <label htmlFor="" className="text-lg text-zinc-300">description:</label>
                                    <textarea type="text" className="resize-none rounded-xl px-3 py-2 bg-zinc-700 h-44" />
                                </form>
                            </div>
                            <div className="pt-10 w-1/3">
                                <div className="w-full bg-zinc-900 px-3 py-2 rounded-lg grid gap-0.5 shadow-md  shadow-zinc-950">
                                    <h3 className="text-lg">p/communityname</h3>
                                    <p className="text-xs pl-1">1 member • 1 online</p>
                                    <p className="text-sm">Your community description</p>
                                </div>
                            </div>
                        </div>
                        <div className="w-full flex justify-end pr-3">
                            <button className="px-8 bg-zinc-800 py-2 rounded-3xl" >Create</button>
                            </div>
                    </div>
                </div>
          )
        }

  
}

export default CreateCommu