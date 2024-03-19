import React from 'react';
import {
  Box,
  Typography,
  Button,
  Menu,
  MenuItem,
  IconButton,
  Tooltip,
  Divider
} from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export const TopHeader: React.FC = () => {
  const [showAvatar, setShowAvatar] = React.useState(false);
  const onClickShowAvatar = () => setShowAvatar(!showAvatar);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px', backgroundColor: '#fafafa' }}>
      {/* Stats Info */}
      <Box sx={{ display: 'flex', border: '1px solid red', justifyContent: 'space-between'}}>
        <Typography variant="body2">Cryptos: 2.2M+</Typography>
        <Typography variant="body2">Exchanges: 722</Typography>
        <Typography variant="body2" color="primary">Market Cap: $2.55T <span style={{ color: '#4caf50' }}>↑ 8.95%</span></Typography>
        <Typography variant="body2" color="error">24h Vol: $137.02B ↓ 40.15%</Typography>
        <Typography variant="body2" sx={{
          color: '#4caf50',
          backgroundColor: '#e8f5e9',
          borderRadius: '4px',
        }}>Dominance: BTC: 52.1% ETH: 18.2%</Typography>
      </Box>

      <Box sx={{ display: 'flex', gap: 2 }}>
        <Button
          aria-label="ETH gas info"
          startIcon={<MonetizationOnIcon />}
          endIcon={<KeyboardArrowDownIcon />}
        >
          ETH Gas: 102 Gwei
        </Button>
      </Box>

      {/* User Interface Options */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        {/* Language selection */}
        <Tooltip title="Select language">
          <IconButton size="large">
            <LanguageIcon />
          </IconButton>
        </Tooltip>
        {/* Currency selection */}
        <Button variant="outlined" endIcon={<KeyboardArrowDownIcon />}>
          USD
        </Button>
        <Divider orientation="vertical" flexItem />
        {/* More options */}
        <IconButton
          aria-label="show more"
          aria-controls="long-menu"
          aria-haspopup="true"
          onClick={handleMenu}
        >
          <MoreVertIcon />
        </IconButton>
        <Menu
          id="long-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>Get Listed</MenuItem>
          <MenuItem onClick={handleClose}>API</MenuItem>
          <MenuItem onClick={handleClose}>Careers</MenuItem>
          {/* ... more items */}
        </Menu>
        {/* Notifications */}
        <IconButton size="large">
          <NotificationsNoneIcon />
        </IconButton>
        {/* User profile */}
        {
          !showAvatar &&
          <IconButton size="large">
            <AccountCircleIcon onClick={onClickShowAvatar} />
          </IconButton>
        }
        {
          showAvatar &&
          <img src="/snek.jpeg" alt="snackmarketcap logo" style={{
            width: '40px',
            height: '30px',
          }} />
        }
      </Box>
    </Box>
  );
};
