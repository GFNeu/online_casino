import React, {useEffect} from 'react'


//Components
import Header from './components/Header'
import Footer from './components/Footer'
import Content from './components/Content'

import { makeStyles } from '@material-ui/core/styles';

import { useDispatch } from 'react-redux'
import { setUser } from './state/user'
import { setBalance } from './state/balance'

function App() {
  const classes = useStyles();
  const dispatch = useDispatch()

  useEffect(()=>{
    if(localStorage){
      (console.log("entre en el if"))
      const user = localStorage.getItem("user")
      if(user) dispatch(setUser(user))
      const balance = localStorage.getItem("balance")
      if(balance) {
        const balanceToSave = parseFloat(balance)
        dispatch(setBalance(balanceToSave))
      }
    }
  },[dispatch])


  return (
    <div className={classes.root}>
      <Header />
      <Content className={classes.content}/>
      <Footer />
    </div>
  );
}

export default App;


const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column"
  },
  content: {
    flexGrow: 1
  }
}));