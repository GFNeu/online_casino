import React, {useState, useEffect} from 'react'
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';

import { makeStyles } from '@material-ui/core/styles';
import Fade from '@material-ui/core/Fade';

import { randomNumber } from '../utils/utils'

import Slot from './Slot'

import { decreaseBalance, addToBalance } from '../state/balance'
import { newResult } from '../state/results'
import { useDispatch } from 'react-redux'

const ModalComponent = ({open, handleClose}) => {
    const dispatch = useDispatch()
    const [slot1, setSlot1] = useState("-")
    const [slot2, setSlot2] = useState("-")
    const [slot3, setSlot3] = useState("-")

    const handleTest = ()=>{
        setSlot1(7)
        setSlot2(7)
        setSlot3(7)
    }

    const handleSpin = ()=>{
        dispatch(decreaseBalance())
        setSlot1(randomNumber())
        setSlot2(randomNumber())
        setSlot3(randomNumber())
    }

    useEffect(()=>{
        const slots = [slot1, slot2, slot3]
        if(!slots.includes("-")){
            const coincidences = new Set(slots).size
            if(coincidences === 2) dispatch(addToBalance(0.5))
            if(coincidences === 1 && slots.every(s => s === 7)) dispatch(addToBalance(10))
            else if(coincidences === 1) dispatch(addToBalance(5))  
            
            dispatch(newResult(slots))
        }


    },[slot1, slot2, slot3, dispatch])

    const classes = useStyles();
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
        >
            <Fade in={open}>
                <div className={classes.container}>
                    <div className={classes.slotsContainer}>
                        <Slot number={slot1}/>
                        <Slot number={slot2}/>
                        <Slot number={slot3}/>
                    </div>
                    
                    <Button variant="contained" className={classes.spin} onClick={handleSpin}>
                        Spin! 
                    </Button>
                    <div className={classes.secondaryContainer}>
                        <Button variant="contained" color="primary" className={classes.secondary} onClick={handleTest}>
                            Test
                        </Button>
                        <Button variant="contained" color="primary" className={classes.secondary} onClick={handleClose}>
                            Close
                        </Button>
                    </div>
                    
                </div>
            </Fade>
      </Modal>
    )
}

export default ModalComponent


const useStyles = makeStyles((theme) => ({
    container: {
        backgroundColor: "red",
        marginTop: "10vh",
        marginRight: "5vw",
        marginLeft: "5vw",
        display: "flex",
        flexFlow: "column",
        justifyContent: "center", 
        alignItems: "center",
        border: "4px ridge #FFCA11",
        borderRadius: 4,
        outline: 0,
        background: "radial-gradient(circle, rgba(244,0,0,1) 0%, rgba(80,0,0,1) 100%)",
        padding: theme.spacing(4)
    },
    slotsContainer: {
        display: "flex",
        width: "100%",
        maxWidth: 275,
        justifyContent: "space-between"
    },
    spin: {
        backgroundColor: theme.palette.warning.main,
        fontWeiwght: "bolder",
        width: "100%",
        maxWidth: 275,
        marginTop: theme.spacing(2)
    },
    secondary: {
        width: "49%"
    }, 
    secondaryContainer: {
        display: "flex",
        width: "100%",
        maxWidth: 275,
        justifyContent: "space-between",
        marginTop: theme.spacing(2)
    }
  }));