/* eslint-disable no-unused-vars */
import React from 'react';
import { Grid } from '@mui/material';
import VideoItem from './VideoItem';

let VideoList = (props) => {
  const { videos, onVideoSelect } = props;
  const listOfVideos = videos.map((video, id) => <VideoItem key={id} video={video} onVideoSelect={onVideoSelect} />);

    return (
      <Grid container spacing={10}>
        {listOfVideos}
      </Grid>
    )
  }

export default VideoList;