import { Box, IconButton, Tooltip } from '@material-ui/core';
import React, { useState } from 'react';
import Brightness5Icon from '@material-ui/icons/Brightness5';
import Brightness4Icon from '@material-ui/icons/Brightness4';

function ChangeTheme({ handleChangeTheme }) {
  const [darkThemeChecked, setDarkThemeChecked] = useState(true);

  const handleClick = () => {
    setDarkThemeChecked(!darkThemeChecked);
    handleChangeTheme(!darkThemeChecked);
  }

  return (
    <Box component="span" mr={2} my={1}>
      <Tooltip title="Toggle light/dark theme">
        <IconButton
          edge="end"
          onClick={handleClick}
          color="inherit"
        >
          {
            darkThemeChecked ?
              <Brightness5Icon /> :
              <Brightness4Icon />
          }
        </IconButton>
      </Tooltip>
    </Box>
  )
}

export default ChangeTheme
