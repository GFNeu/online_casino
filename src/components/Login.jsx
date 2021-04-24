import React, {useState} from 'react'
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import { useDispatch } from 'react-redux'
import { setUser } from '../state/user'

const Login = ({open, handleClose}) => {
    const [input, setInput] = useState("") 
    const [error, setError] = useState(false)
    const dispatch = useDispatch()

    const handleSubmit = ()=>{
        if(input === ""){
            setError(true)
        }else{
            dispatch(setUser(input))
            handleClose()
        }
    }

    const classes = useStyles();
    return (
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        className={classes.modal}
      >
          <div className={classes.container}>
                <Typography variant="h4" gutterBottom color="primary" align="center">
                <AccountCircleIcon fontSize="inhereit"/> Login!
                </Typography>
               
                <TextField
                error={error}
                id="outlined-error-helper-text"
                label="Enter your name"
                placeholder="Write here"
                helperText="This field is required"
                variant="outlined"
                value={input}
                onChange={(e)=>setInput(e.target.value)}
                fullWidth
                />
                <Button variant="contained" color="primary" fullWidth className={classes.button} onClick={handleClose}>
                    Cancel
                </Button>
                <Button variant="contained" color="secondary" fullWidth className={classes.button} onClick={handleSubmit}>
                    Login!
                </Button>
          </div>
      </Modal>
    )
}

export default Login


const useStyles = makeStyles((theme) => ({
    modal: {
        display: "flex",
        justifyContent: "center", 
        alignItems: "center",
        outline: 0,
    },
    container:{
        backgroundColor: "white",
        padding: theme.spacing(4),
        outline: 0,
        borderRadius: 4
    },
    button: {
        marginTop: theme.spacing(2)
    }
    
  }));