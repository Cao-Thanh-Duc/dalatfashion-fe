import React, { useState } from 'react';
import { Button, Menu, MenuItem } from '@mui/material';
import { FaRegCircleUser } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';
import { clearLS } from '../../../utils/storage';

const UserDropdown = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleProfile = () => {
    handleClose();
    navigate('/profile'); // Điều hướng tới trang Profile
  };

  const handleLogout = () => {
    handleClose();
    clearLS(); // Xóa thông tin user trong localStorage
    window.location.reload(); // Refresh trang
  };

  return (
    <>
      <Button
        className='mr-3 circle'
        aria-controls={open ? 'user-menu' : undefined}
        aria-haspopup='true'
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <FaRegCircleUser />
      </Button>
      <Menu
        id='user-menu'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'user-menu-button',
        }}
      >
        <MenuItem onClick={handleProfile}>Profile</MenuItem>
        <MenuItem onClick={handleLogout}>Đăng xuất</MenuItem>
      </Menu>
    </>
  );
};

export default UserDropdown;
