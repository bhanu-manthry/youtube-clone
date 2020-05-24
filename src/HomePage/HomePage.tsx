import React from 'react'
import { Grid, Box } from '@material-ui/core'

import TopBar from './TopBar';
import MainContent from './MainContent';
import SideNav from './SideNav';

export default function HomePage() {
  return (
    <div>
      <TopBar />

      <Box paddingTop="6vh"></Box>

      <Box display="flex">
        <Box width="12%">
          <div style={{ position: 'fixed', height: '94vh', width: '12%', background: 'white' }}>
            <SideNav />
          </div>
        </Box>

        <Box flex={1}>
          <MainContent />
        </Box>
      </Box>
    </div>
  )
}
