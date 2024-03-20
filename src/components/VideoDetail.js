/* eslint-disable no-unused-vars */
import React, { Fragment } from 'react';

//paper is used to create a card and typography is used in headings and characters
import { Paper, Typography } from '@mui/material';

let VideoDetail = (props) => {
  if(!props.video) return  <div>Loading...</div>;

  const videoSrc = `https://www.youtube.com/embed/${props.video.id.videoId}`;


    return (
      <Fragment>
          <Paper elevation={6} style={{ height : '60%', marginLeft:"2rem", width:"100%"}} >
            <iframe src={videoSrc} height="100%" width="100%" frameborder="0" title='Video Player' />
          </Paper>
          <Paper elevation={6} style={{ padding : '15px'}} >
              <Typography variant="h4" >{props.video.snippet.title} - {props.video.snippet.channelTitle}</Typography>
              <Typography variant="subtitle1" > {props.video.snippet.channelTitle}</Typography>
              <Typography variant="subtitle2"> {props.video.snippet.description} </Typography>
          </Paper>
      </Fragment>
    )
  }

export default VideoDetail