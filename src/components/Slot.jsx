import React from 'react'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const Slot = ({number}) => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <Typography variant="h3" className={classes.number}>
                {number}
            </Typography>
        </div>
    )
}

export default Slot

const useStyles = makeStyles((theme) => ({
    container: {
        backgroundColor: "white",
        border: "5px outset #1276FF",
        borderRadius: 4,
        padding: theme.spacing(3),
        width: 85,
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center",
        boxShadow: "3px 3px 15px -4px rgba(0,0,0,0.69)"
    },
    number: {
        fontWeight: "bolder"
    }
  }));
