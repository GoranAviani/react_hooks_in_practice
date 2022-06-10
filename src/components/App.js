import React, {useEffect, useState} from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

const App = () => {
  const [state, setState] = useState({ videos: [], selectedVideo: null });

  useEffect(()=>onTermSubmit("submarine"),[])

  const onTermSubmit = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });

    setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0],
    });
  };

  const onVideoSelect = (video) => {
    setState(prevState => ({...prevState, selectedVideo: video }));
  };


    return (
      <div className="ui container">
        <SearchBar onFormSubmit={onTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                onVideoSelect={onVideoSelect}
                videos={state.videos}
              />
            </div>
          </div>
        </div>
      </div>
    );

}

export default App;
