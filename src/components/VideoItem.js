import React from "react";

const VideoItem = (props) => {
    return(
     <div onClick={() => {props.onVideoSelect(props.video)}} className="item">
         <div className="ui container">
             <div className="ui grid">
                 <div className="ui row">
                     <div className="column six wide">
                        <img alt={props.video.snippet.title} src={props.video.snippet.thumbnails.medium.url} className="ui image"/>
                     </div>
                     <div className="eight wide column">
                        <div className="content">
                            <div className="header" style={{fontSize: 11}}>
                                {props.video.snippet.title}
                            </div>
                        </div>
                     </div>
                 </div>
             </div>
         </div>
      
       
    </div>
    );
}

export default VideoItem;
