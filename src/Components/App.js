import React from "react";
import Searchbar from "./Searchbar";
import youtubeapi from "../Apis/yotubeapi";
import Videolist from "./Videolist";
import Videodetail from "./Videodetail";

class App extends React.Component {
  state = { videolistVariable: [], onVideoSelect: null };

  componentDidMount(){
    this.onTermSubmit('reactjs');
  }

  onTermSubmit = async term => {
    // console.log('App',term);
    const success = await youtubeapi.get("/search", {
      params: {
        q: term
      }
    });
    this.setState({ videolistVariable: success.data.items,onVideoSelect:success.data.items[0] });
  };

  onVideoSelect = video => {
    this.setState({ onVideoSelect: video });
  };
  render() {
    return (
      <div className="ui container">
        <Searchbar onFormSubmit={this.onTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <Videodetail Videodetail={this.state.onVideoSelect} />
            </div>
            <div className="five wide column">
              <Videolist
                passinglist={this.state.videolistVariable}
                onVideoSelect={this.onVideoSelect}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
