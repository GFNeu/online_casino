import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import IconButton from '@material-ui/core/IconButton';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';

import { useSelector } from 'react-redux'

export default function Results() {
  let [isReversed, setIsReversed] = useState(false)
  let results = useSelector(state => state.results)
  const classes = useStyles();

  const handleReverse = ()=>{
      setIsReversed(state => !state)
  }
  
  const resultsToShow = isReversed && results.length? [...results].reverse() : results

  if(!results.length) return <div className={classes.container}><p className={classes.p}>Press start to play!</p></div>

  return (
    <TableContainer className={classes.container}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center" className={classes.white}>
              Id
              <IconButton
                color="secondary"
                aria-label="delete"
                className={classes.margin}
                size="small"
                onClick={handleReverse}
              >
                {!isReversed?<ArrowDropDownIcon fontSize="inherit" />:<ArrowDropUpIcon fontSize="inherit" />}
              </IconButton>
            </TableCell>
            <TableCell align="center" className={classes.white}>
              Slots
            </TableCell>
            <TableCell align="center" className={classes.white}>
            Date
            <IconButton
                color="secondary"
                aria-label="delete"
                className={classes.margin}
                size="small"
                onClick={handleReverse}
              >
                {!isReversed?<ArrowDropDownIcon fontSize="inherit" />:<ArrowDropUpIcon fontSize="inherit" />}
              </IconButton>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {resultsToShow.map((row) => (
            <TableRow key={row.id}>
              <TableCell align="center" className={classes.white}>
                {row.id}
              </TableCell>
              <TableCell align="center" className={classes.white}>
                {row.slots.join("-")}
              </TableCell>
              <TableCell align="right" className={classes.white}>
                {row.date.toString()}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

const useStyles = makeStyles({
    container:{
        width: "100%",
        display: "flex",
        justifyContent: "center",
    },
    table: {
      maxWidth: 600,
    },
    white: {
        color: "white"
    },
    p: {
        color: "lightgray"
    }
  });
