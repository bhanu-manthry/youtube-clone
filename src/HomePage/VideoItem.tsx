import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography, Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  img: {
    width: '100%',
    height: 'auto',
  }
}));

type Props = {
  item: any
}

export default function VideoItem({ item }: Props) {
  const classes = useStyles();

  return (
    <Box mb={6}>
      <Box position="relative">
        <img className={classes.img} src={`https://i.picsum.photos/id/${item + 10}/400/230.jpg`} />
        <Box position="absolute" right="8px" bottom="8px">
          <div style={{ color: 'white', background: '#080808', padding: '0 4px' }}>
            <Typography variant="caption" style={{ fontWeight: 'bold' }}>
              19:03
            </Typography>
          </div>
        </Box>
      </Box>
      <Box mt={2} mb={1}>
        <Typography variant="subtitle2">
          The 4 Hour Work Week by Tim Ferriss (animated book summary) - Escape The 9-5
        </Typography>
      </Box>

      <Typography variant="body2" color="textSecondary">
        Better than yesterday
      </Typography>

      <Typography variant="body2" color="textSecondary">
        866k views • 9 months ago
      </Typography>
    </Box>
  )
}
