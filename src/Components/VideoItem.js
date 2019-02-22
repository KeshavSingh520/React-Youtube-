import React from "react"






const VideoItem=({video,onVideoSelect})=>{

   
    return (
        <div className="item ui segment">

        <div className="content">

            <a href="#">
            <img className="ui image" onClick={()=>onVideoSelect(video)} src={video.snippet.thumbnails.medium.url} alt="images not loaded"/>

            </a>
            <div className="header">
            <p>{video.snippet.title}</p>
            </div>

        </div>
    </div>
    )
}


export default VideoItem;