import { Button, Box } from '@material-ui/core';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import { useState, useEffect } from 'react';

const messages = [
  'Good day, mate!',
  'Good morning',
  'Good afternoon',
  'Good evening',
  'Hello!!!'
];

function HappyMessage() {
  const [msg, setMsg] = useState(null);

  const changeMsg = () => {
    setMsg(messages[Math.floor(Math.random() * messages.length)]);
  }

  const handleClick = () => {
    changeMsg();
  }

  useEffect(() => {
    changeMsg();
  }, [])

  return (
    <Box my={8}>
      <Button variant="contained" color="primary" onClick={handleClick} startIcon={<EmojiPeopleIcon />}>
        Say Greeting!
      </Button>
      <h1>{msg}</h1>
    </Box>
  );
}

export default HappyMessage;
