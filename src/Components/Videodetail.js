import React from "react"

const Videodetail=({Videodetail})=>{
    console.log('from videodetail !',Videodetail)
    if(!Videodetail){
            return <div>Loading..</div>
    }

    const srcUrl=`https://www.youtube.com/embed/${Videodetail.id.videoId}`;
   
    return(
      <div>
            <div className="ui embed">
        <iframe title="Videodetail" src={srcUrl}></iframe>
        </div >
        <div className="ui segment">
        <h4><p className="header"> {Videodetail.snippet.title}</p></h4>
        <p>{Videodetail.snippet.description}</p>
        </div>
      </div>
    )
}

export default Videodetail;