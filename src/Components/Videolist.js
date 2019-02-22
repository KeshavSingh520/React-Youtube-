    import React from "react"
import VideoItem from "./VideoItem";

const Videolist=({passinglist,onVideoSelect})=>{
    const oneVideo=passinglist.map(video=>{return <VideoItem key={video.id.videoId} video={video} onVideoSelect={onVideoSelect}/>}  )
return <div className="ui list segment">{oneVideo}</div>
}

    export default Videolist;