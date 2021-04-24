import React, {useState} from 'react';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import { useSelector, useDispatch } from 'react-redux'
import { setUser } from '../state/user'
import { deleteResults } from '../state/results'
import { setBalance } from '../state/balance'

import image from '../assets/klipartz.com.png'
import Login from './Login'
import Avatar from './Avatar'

const Header = () => {
  const dispatch = useDispatch()
  const [showLogin, setShowLogin] = useState(false)
  const classes = useStyles();
  const balance = useSelector(state => state.balance)
  const user = useSelector(state => state.user)

  const handleClose = ()=>{
    setShowLogin(false)
  }

  const logout = ()=>{
      dispatch(setUser(""))
      dispatch(deleteResults())
      dispatch(setBalance(99.99))
      localStorage.removeItem("user")
      localStorage.removeItem("balance")
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
            <div className={classes.title}>
                <img src={image} alt="Online Casino" className={classes.logo}/>
            </div>
          
            <Typography variant="body1" className={classes.balance}>
                ${balance.toFixed(2)}
            </Typography>

            {!user.name? <Button color="secondary" variant="contained" onClick={()=>setShowLogin(true)}>Login</Button> : <Avatar logout={logout}/>}
            <Login open={showLogin} handleClose={handleClose}/>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header


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
    logo: {
        height: "auto", 
        width: "7%",
        minWidth: 90,
        padding: theme.spacing(1)
    },
    balance:{
      marginRight: theme.spacing(3)
    }
  }));