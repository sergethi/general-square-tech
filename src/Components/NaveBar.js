import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
// import { yellow } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  navigation: {
    fontWeight: "fontWeightBold",
  }
}));

function NaveBar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
      <AppBar position="static" style={{backgroundColor: 'orange', color: 'white'}}>
        <Toolbar>
          {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton> */}
           <div className="logo" ></div>
          <Typography variant="h6" className={classes.title}>
            General Square Tech
          </Typography>
         <div style={{color: 'white', fontWeight: "fontWeightBold"}} >
           <Button color="inherit" >About</Button>
          <Button color="inherit">Services</Button>
          <Button color="inherit">Team</Button>
          <Button color="inherit">Contacts</Button>
         </div>
          
        </Toolbar>
      </AppBar>
    </div>
    )
}

export default NaveBar
