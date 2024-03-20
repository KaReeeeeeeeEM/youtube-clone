/* eslint-disable no-unused-vars */
import react, { useEffect, useState } from 'react';
import youtube from "./api/youtube";
import { Grid } from "@mui/material";
import { SearchBar, VideoList, VideoDetail } from "./components";

let App = () => {
  const [ videos , setVideos ] = useState([]);
  const [ selectedVideo, setSelectedVideo ] = useState("");

  useEffect(() => {
    handleSubmit("youtube");
  }, []);

  let handleSubmit = async (searchTerm) => {
    const response = await youtube.get("search", {
      params: {
        part: 'snippet',
        maxResults: 5,
        key: 'AIzaSyBdT4OzRbuJMNmWhLOmfvMLGgxcrdNXPYI',
        q : searchTerm,
      },
    });
      
    //set the videos and the selected video to the first video in the response array
      setVideos(response.data.items);
      setSelectedVideo(response.data.items[0]);

  };

  let onSelectVideo = (video) => {
      setSelectedVideo(video);
  }

  return (
    <Grid justify="center" container spacing={10}>
      <Grid item xs={12}>
        <Grid container spacing={12}>
          <Grid item xs={12}>
            <SearchBar onFormSubmit={handleSubmit} />
          </Grid>
          <Grid item xs={8}>
            <VideoDetail video={selectedVideo} />
          </Grid>
          <Grid item xs={4}>
            <VideoList videos={videos} onVideoSelect={onSelectVideo} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default App;
