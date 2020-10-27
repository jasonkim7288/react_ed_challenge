import React, { Fragment, useState } from 'react'
import { Container, Typography, Box} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import BuzzBuzz from './BuzzBuzz';
import HappyMessage from './HappyMessage';
import Quotes from './Quotes';
import Comments from './Comments';
import CookieGame from './CookieGame';
import YellingGreeterWrapper from './YellingGreeterWrapper';

import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    'aria-controls': `scrollable-force-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

function App() {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="on"
          indicatorColor="primary"
          textColor="primary"
          aria-label="scrollable force tabs example"
        >
          <Tab label="Happy Message" {...a11yProps(0)} />
          <Tab label="Quotes" {...a11yProps(1)} />
          <Tab label="BuzzBuzz" {...a11yProps(2)} />
          <Tab label="Comments" {...a11yProps(3)} />
          <Tab label="Cookie Game" {...a11yProps(4)} />
          <Tab label="Yelling Greeter" {...a11yProps(5)} />
          <Tab label="Item Seven" {...a11yProps(6)} />
        </Tabs>
      </AppBar>

      <TabPanel value={value} index={0}>
        <HappyMessage />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Quotes />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <BuzzBuzz />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Comments />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <CookieGame />
      </TabPanel>
      <TabPanel value={value} index={5}>
        <YellingGreeterWrapper />
      </TabPanel>
      <TabPanel value={value} index={6}>
        Item Seven
      </TabPanel>

    </Container>
  )
}

export default App
