import React from 'react'
import GitHubIcon from '@material-ui/icons/GitHub';
import { Box, IconButton, Tooltip } from '@material-ui/core';

function Links() {
  return (
    <Box component="span" ml="auto" mr={3} my={1}>
      <a href="https://github.com/jasonkim7288/react_ed_challenge" target="_blank" rel="noreferrer">
        <Tooltip title="GitHub repository">
          <IconButton
            edge="end"
            color="inherit"
          >
            <GitHubIcon />
          </IconButton>
        </Tooltip>
      </a>
    </Box>
  )
}

export default Links
