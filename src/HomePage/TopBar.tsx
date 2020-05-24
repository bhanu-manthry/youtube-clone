import React from 'react'
import { Grid, Box, TextField, IconButton } from '@material-ui/core'
import logo from '../assets/logo.png';
import {
  Menu,
  VideoCall,
  Apps,
  Notifications
} from '@material-ui/icons';


export default function TopBar() {
  return (
    <div>
      <Box
        zIndex="1"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        style={{ height: '6vh', position: 'fixed', background: 'white', width: '100%' }}>

        <Box flex={1}>
          <Box px={4}>
            <Grid container spacing={4} alignItems="center">
              <Grid item>
                <IconButton>
                  <Menu />
                </IconButton>
              </Grid>
              <Grid item>
                <img src={logo} style={{ width: '4rem', height: 'auto' }} />
              </Grid>
            </Grid>
          </Box>
        </Box>

        <Box flex={1}>
          <TextField placeholder="Search" variant="outlined" size="small" fullWidth />
        </Box>
        <Box flex={1}></Box>
        <Box>
          <Box px={4}>
            <Grid container spacing={1} alignItems="center">
              <Grid item>
                <IconButton>
                  <VideoCall />
                </IconButton>
              </Grid>

              <Grid item>
                <IconButton>
                  <Apps />
                </IconButton>
              </Grid>

              <Grid item>
                <IconButton>
                  <Notifications />
                </IconButton>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </div>
  )
}