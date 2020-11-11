import React, { useState } from 'react';
import { Container, Box, Toolbar} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { lightTheme, darkTheme } from '../libs/theme';
import { MuiThemeProvider, CssBaseline} from '@material-ui/core';
import BuzzBuzz from './BuzzBuzz';
import HappyMessage from './HappyMessage';
import Quotes from './Quotes';
import YellingGreeterWrapper from './YellingGreeterWrapper';

import '../styles/app.css';

import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import VibrationIcon from '@material-ui/icons/Vibration';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import PeopleIcon from '@material-ui/icons/People';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import ChildCareIcon from '@material-ui/icons/ChildCare';

import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import LogInOut from './LogInOut';
import ThreeUserName from './ThreeUserName';
import BusinessCardMaker from './businessCard/BusinessCardMaker';
import BillAndTip from './BillAndTip';
import ToDoMain from './toDo/ToDoMain';
import Hooks from './Hooks';
import ChangeTheme from './ChangeTheme';
import Links from './Links';

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
          {children}
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
  },
}));

function App() {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [theme, setTheme] = useState(darkTheme);

  const handleChangeTheme = (setDark) => {
    setDark === true ? setTheme(darkTheme) : setTheme(lightTheme);
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Container className={classes.root}>
        <AppBar position="static" color="default">
          <Toolbar>
            <Links />
            <ChangeTheme handleChangeTheme={handleChangeTheme}/>
          </Toolbar>
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="on"
            indicatorColor="primary"
            textColor="primary"
            aria-label="scrollable force tabs example"
          >
            <Tab label="Business card maker" icon={<ContactPhoneIcon />} {...a11yProps(0)} />
            <Tab label="ToDo list" icon={<FormatListBulletedIcon />} {...a11yProps(1)} />
            <Tab label="Happy Message" icon={<EmojiPeopleIcon />} {...a11yProps(2)} />
            <Tab label="Quotes" icon={<FormatQuoteIcon />} {...a11yProps(3)} />
            <Tab label="BuzzBuzz" icon={<VibrationIcon />} {...a11yProps(4)} />
            <Tab label="Yelling Greeter" icon={<VolumeUpIcon />} {...a11yProps(5)} />
            <Tab label="Log in and out" icon={<LockOpenIcon />} {...a11yProps(6)} />
            <Tab label="Multiple user names" icon={<PeopleIcon />} {...a11yProps(7)} />
            <Tab label="Bill and Tip" icon={<AttachMoneyIcon />} {...a11yProps(8)} />
            <Tab label="Hooks" icon={<ChildCareIcon />} {...a11yProps(9)} />
          </Tabs>
        </AppBar>

        <TabPanel value={value} index={0}>
          <BusinessCardMaker />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <ToDoMain />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <HappyMessage />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <Quotes />
        </TabPanel>
        <TabPanel value={value} index={4}>
          <BuzzBuzz />
        </TabPanel>
        <TabPanel value={value} index={5}>
          <YellingGreeterWrapper />
        </TabPanel>
        <TabPanel value={value} index={6}>
          <LogInOut />
        </TabPanel>
        <TabPanel value={value} index={7}>
          <ThreeUserName />
        </TabPanel>
        <TabPanel value={value} index={8}>
          <BillAndTip />
        </TabPanel>
        <TabPanel value={value} index={9}>
          <Hooks />
        </TabPanel>
      </Container>
    </MuiThemeProvider>
  )
}

export default App
