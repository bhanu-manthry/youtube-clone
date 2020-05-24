import React from 'react'
import VideoItem from './VideoItem';
import { Grid, Box } from '@material-ui/core';
import _ from 'lodash';

let videos = _.times(20);

export default function MainContent() {
  return (
    <div>
      <Box px={12} pt={2}>
        <Grid container spacing={4}>
          {videos.map(item => (
            <Grid item md={3}>
              <VideoItem item={item} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  )
}
