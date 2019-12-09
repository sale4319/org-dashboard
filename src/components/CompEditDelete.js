import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { deleteCard } from '../actions';

const options = ['edit', 'delete'];

const ITEM_HEIGHT = 48;

const LongMenu = ({ cardId, listId, dispatch }) => {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };


  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDelete = (cardId, listId) => {
    dispatch(deleteCard(cardId, listId))
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: 80,
          },
        }}
      >
        {options.map((option, index) => (
          <MenuItem key={index} onClick={() => {
            if (option === 'delete') {
              handleDelete(cardId, listId)
            }

          }}>
            <IconButton aria-label={option} >
              {option === "delete" ? <DeleteIcon fontSize="small" /> : <EditIcon fontSize="small" />}
            </IconButton>
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}

export default LongMenu;