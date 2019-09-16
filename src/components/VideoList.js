import React from "react";
import VideoItem from "./VideoItem";

const VideosList = props => {
    const renderList = props.videos.map(item => {
        return <VideoItem key={item.id.videoId} video={item} onVideoSelect={props.onVideoSelect}/>;
    });
    // props.vide os
    return <div className="ui relaxed divided list">{renderList}</div>
};

export default VideosList;
