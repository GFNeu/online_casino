import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import { useSelector } from 'react-redux'
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';

const UserAvatar = ({logout}) => {
    const user = useSelector(state => state.user)
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
   
      };
    
      const handleClose = () => {
        setAnchorEl(null);
        logout()
      };
   

    return (
        <div>
            <Button aria-controls="fade-menu" aria-haspopup="true" onClick={handleClick}>
                <Avatar>{user.name[0]}</Avatar>
            </Button>
            
            <Menu
                id="fade-menu"
                anchorEl={anchorEl}
                keepMounted
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
                className={{marginTop: 10}}
            >
            <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
        </div>
    )
}

export default UserAvatar
