import { useState } from "react"

function Post() {

  const [postScore, setPostscore] = useState(50)  
  let [likeOrDislike, resetScore] = useState(0)
  const[ likeButtonBG,setLikeBG ] = useState("bg-zinc-700")
  const[ dislikeButtonBG, setDislikeBG]  = useState("bg-zinc-700")

  const plusPostscore = () => {
    setDislikeBG("bg-zinc-700")
    if(likeOrDislike == 0){
        setPostscore(postScore + 1 )
        resetScore(likeOrDislike = 1)
        setLikeBG("bg-zinc-400")
    }else if(likeOrDislike == -1){
        setPostscore(postScore + 2)
        resetScore(likeOrDislike = 1)
        setLikeBG("bg-zinc-400")
    }else{
        setPostscore(postScore - 1 )
        resetScore(likeOrDislike = 0)
        setLikeBG("bg-zinc-700")
    }
}
  const dePostscore = () => {
    setLikeBG("bg-zinc-700")
    if(likeOrDislike == 0){
        setPostscore(postScore - 1 )
        resetScore(likeOrDislike = -1)
        setDislikeBG("bg-zinc-400")
    }else if(likeOrDislike == +1){
        setPostscore(postScore - 2)
        resetScore(likeOrDislike = -1)
        setDislikeBG("bg-zinc-400")

    }else{
        setPostscore(postScore + 1 )
        resetScore(likeOrDislike = 0)
        setDislikeBG("bg-zinc-700")

    }
  }

  return (
    <div className="bg-zinc-800 rounded-lg mb-3 px-4 py-3  m-auto w-2/4 grid gap-2">
        <div className="flex">
            <div className="flex w-1/2">
                <img src="profile-icon-design-free-vector.jpg" alt="commu_profile" className="h-7 mr-2 rounded-3xl" />
                <a className="text-zinc-300 mr-2">p/Pandacommu</a>
                <p className="text-sm text-end text-zinc-500 pt-[3px]">• 5 hr.ago</p>
            </div>
            <div className="flex justify-end w-1/2 gap-2">
                <button className="bg-zinc-400 rounded-2xl px-2 text-xs font-bold pb-0.5">join</button>
                <button className="px-1 text-zinc-300">•••</button>
            </div>
        </div>

        <div>
            <h2 className="font-semibold text-2xl text-zinc-300">Saw a girl die on the road last night</h2>
            <p className="text-gray-400">I (34f) am at Koh Lanta and had a great day yesterday with snorkeling and swimming in caves. Decided to go for a bite and a drink with a few people from the tour, we were having a great time, untill something happened.
                A young (early twenties) girl fell with her scooter, with her head on the road without helmet. She was not breathing, so one of my group started to do CPC despite many blood everywhere. When the ambulance came, they just put her in, and stopped doing CPR altogether and gave her up.</p>
        </div>

        <div className="w-full flex gap-2">
            <div className="w-fit grid grid-cols-3 items-center bg-zinc-700 rounded-3xl" >
                <button className={`rounded-3xl ${likeButtonBG} hover:bg-zinc-500 w-8 h-8 fa-lg`} onClick={plusPostscore} id="like_button" >
                    <i className="fa-regular fa-thumbs-up"></i>
                </button>
                <p className="text-center text-xs font-semibold">{postScore}</p>
                <button className={`rounded-3xl ${dislikeButtonBG} hover:bg-zinc-500 w-8 h-8 fa-flip-vertical fa-lg `} onClick={dePostscore}>
                    <i className="fa-regular fa-thumbs-up">
                    </i>
                </button>
            </div>

            <button className="flex items-center gap-1 w-16 justify-center bg-zinc-700 rounded-3xl hover:bg-zinc-600">
                <i className="fa-regular fa-comment"> </i>
                <p>0</p>
            </button>

            <button className="flex items-center gap-1 w-20 justify-center bg-zinc-700 rounded-3xl hover:bg-zinc-600">
            <i className="fa-solid fa-share"></i>
            <p>share</p>
            </button>
        </div>
    </div>
  )
}

export default Post