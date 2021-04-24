import React, { useState } from 'react'

import Button from '@material-ui/core/Button';
import Modal from './Modal'
import Results from './Results'

import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux'

const Content = () => {
    const [showModal, setShowModal] = useState(false)
    const balance = useSelector( state => state.balance)
    const classes = useStyles();

    const handleOpen = ()=>{
        setShowModal(true)
    }
    const handleClose = ()=>{
        setShowModal(false)
    }
    
    if(showModal && !balance) setShowModal(false)

    return (
        <div className={classes.root}>
            <div className={classes.buttonContainer}>
                <Button variant="contained" color="secondary" size="large" onClick={handleOpen} disabled={balance > 0? false: true}>Start</Button>
            </div>
            <Modal open={showModal} handleClose={handleClose}/>
            <Results />
        </div>
    )
}

export default Content

const useStyles = makeStyles((theme) => ({
    root: {
      background: "radial-gradient(circle, rgba(0,117,19,1) 0%, rgba(0,46,5,1) 100%)",
      display: "flex",
      flexFlow: "column",
      minHeight: "90vh",
      paddingBottom: 100,
    },
    buttonContainer:{
        width: "100%",
        display: "flex",
        justifyContent: "center", 
        alignItems: "center",
        height: "20vh",
        maxHeight: "20vh"
    }
  }));
