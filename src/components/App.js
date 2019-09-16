import React from 'react';
import Searchbar from "./SearchBar";
import Axios from 'axios';
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

const KEY = 'AIzaSyD7gc9Lq2uZj5t8aI7jWQ3fJv7AMhJDZNk';
class App extends React.Component {
  state = {videos: [], selectedVideo: null};

  onTermSubmit = async term => {

   const response = await Axios.get("https://www.googleapis.com/youtube/v3/search", {

       params: {
        part: "snippet",
        maxResults: "5",
        key: KEY,
        q: term
       }
     });
     this.setState({
       videos: response.data.items,
       selectedVideo: response.data.items[0]
      });
     
  };

  onVideoSelect = (video) => {
   this.setState({selectedVideo: video});
    
  }

  componentDidMount() {
    this.onTermSubmit('building')
  }

  render() {
     return (
      <div className="ui container">
        <Searchbar onFormSubmit={this.onTermSubmit}/>
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo}/>
            </div>
            <div className="five wide column">
              <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
