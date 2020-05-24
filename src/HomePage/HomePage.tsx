import React from 'react'
import { Grid, Box } from '@material-ui/core'

import TopBar from './TopBar';
import MainContent from './MainContent';
import SideNav from './SideNav';

export default function HomePage() {
  return (
    <div>
      <Box
        py={1}
        zIndex="1"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        style={{ position: 'fixed', background: 'white', width: '100%' }}>
        <TopBar />
      </Box>

      <Box paddingTop="6vh"></Box>

      <Box display="flex">
        <Box width="12%">
          <div style={{ position: 'fixed', height: '100vh', width: '12%', background: 'white' }}>
            <SideNav />
          </div>
        </Box>

        <Box flex={1}>
          <MainContent />
        </Box>
      </Box>
    </div >
  )
}
