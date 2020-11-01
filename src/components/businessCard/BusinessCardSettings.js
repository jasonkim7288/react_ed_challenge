import { Box } from '@material-ui/core';
import React from 'react';


function BusinessCardSettings({ settings, updateSettingCb }) {
  const { textColor, backgroundColor } = settings;

  const handleChange = (e) => {
    const { name, value } = e.target
    console.log('e.target.value:', e.target.value);
    updateSettingCb(name, value);
  }

  return (
    <Box component="span" ml={1}>
      <Box component="span" mx={3}>
        <Box component="span" mx={2}>
          <label for="backGroundColor">Background Color</label>
        </Box>
        <input type="color" defaultValue={backgroundColor} onChange={handleChange} value={backgroundColor} name="backgroundColor" />
      </Box>
      <Box component="span" mx={3}>
        <Box component="span" mx={2}>
          <label for="textColor">Text Color</label>
        </Box>
        <input type="color" defaultValue={textColor} onChange={handleChange} value={textColor} name="textColor" />
      </Box>
    </Box>
  )
}

export default BusinessCardSettings
