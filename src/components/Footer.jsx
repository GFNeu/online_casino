import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const Footer = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <p>Copyright Ⓒ 2021 Guillermo F. Neuberger.</p>
            <p>All Rights reserved.</p>
        </div>
    )
}

export default Footer

const useStyles = makeStyles((theme) => ({
    root: {
      position: "fixed",
      bottom: 0,
      display: "flex", 
      flexFlow: "column",
      justifyContent: "center",
      alignItems: "center",
      padding: theme.spacing(2),
      width: "100%",
      backgroundColor: theme.palette.primary.dark,
      color: "white"
    }
  }));