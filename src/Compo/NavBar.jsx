import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  SwipeableDrawer ,
  List,
  ListItem,
  ListItemText,
  CssBaseline,
  Button 
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import Paper from "../img/Paper.png"
import {Link} from 'react-router-dom'

import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import ScienceIcon from '@mui/icons-material/Science';
import ComputerIcon from '@mui/icons-material/Computer';
import MovieFilterIcon from '@mui/icons-material/MovieFilter';
import HomeIcon from '@mui/icons-material/Home';
import CloseIcon from '@mui/icons-material/Close';
import LockOpenIcon from '@mui/icons-material/LockOpen';

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    marginRight: "auto",
    textDecoration:'none',
    color: '#fff',
    textAlign: 'center'
  },
  drawer: {
    width: 320,
    margin:'0 auto',
    textAlign: 'center'
  },
  content: {
    padding: theme.spacing(3)
  }
}));

const SimpleDrawer = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  return (
    <div>
      <CssBaseline />
      <SwipeableDrawer  open={open} onClose={() => setOpen(false)}>
        <List disablePadding className={classes.drawer}>

          <div className="closebtn">
          <Button onClick={() => setOpen(false)}>
            <CloseIcon sx={{textAlign:'right' , color:'red'}} />
            </Button>
          </div>

          <Typography variant="h5">
          Categories
          </Typography>

        <Link to="/" className="Link_Business">
         <ListItem button >
           <HomeIcon sx={{padding:'9px' , fontSize:'48px' , color:'black'}} />
            <ListItemText primary="Home" />
          </ListItem>
         </Link>

         <Link to="/Business" className="Link_Business">
         <ListItem button>
           <BusinessCenterIcon sx={{padding:'9px' , fontSize:'48px' , color:' #2471a3 '}} />
            <ListItemText primary="Business" />
          </ListItem>
         </Link>

         <Link to="/Sports" className="Link_Business">
         <ListItem button>
         <SportsBasketballIcon sx={{padding:'9px' , fontSize:'48px' , color:' #e74c3c '}} />
            <ListItemText primary="Sports" />
          </ListItem>
         </Link>

         <Link to="/Health" className="Link_Business">
         <ListItem button>
         <HealthAndSafetyIcon sx={{padding:'9px' , fontSize:'48px' , color:'red'}} />
            <ListItemText primary="Health" />
          </ListItem>
         </Link>

         <Link to="/Science" className="Link_Business">
         <ListItem button>
         <ScienceIcon sx={{padding:'9px' , fontSize:'48px' , color:'Green'}} />
            <ListItemText primary="Science" />
          </ListItem>
         </Link>

         <Link to="/Ent" className="Link_Business">
         <ListItem button>
         <MovieFilterIcon sx={{padding:'9px' , fontSize:'48px' , color:' #DE3163 '}} />
            <ListItemText primary="Entrainment" />
          </ListItem>
         </Link>

         <Link to="/Tech" className="Link_Business">
         <ListItem button>
         <ComputerIcon sx={{padding:'9px' , fontSize:'48px' , color:' #6495ED '}} />
            <ListItemText primary="Technology" />
          </ListItem>
         </Link>
        </List>
      </SwipeableDrawer>

      
      <AppBar position="static" color="secondary">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            onClick={() => setOpen(true)}
          >
            <MenuIcon />
          </IconButton>
          <Link to="/" className="Link_heading">
          <Typography variant="h6" className={classes.title}>
             <span><img src={Paper} alt="Error" style={{height:'2.3rem' , color:'#fff'}} /></span>    News
          </Typography>
          </Link>

          <Typography variant="subtitle1">
          <Button variant="text">Login <LockOpenIcon /></Button>
        </Typography>
        </Toolbar>

       
      </AppBar>
    
    </div>
  );
};

export default SimpleDrawer;
