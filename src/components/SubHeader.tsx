import React from 'react';
import { AppBar, Toolbar, Button, IconButton, InputBase, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import PieChartOutlineIcon from '@mui/icons-material/PieChartOutline';

const SubHeader: React.FC = () => {
  return (
    <AppBar position="static" elevation={0} sx={{ borderBottom: '1px solid #e0e0e0', backgroundColor:'white' }}>
      <Toolbar sx={{ justifyContent: 'space-between', overflowX: 'auto' }}>
        {/* Logo and Title */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <img src="/snekmarketcap.png" alt="snackmarketcap logo" style={{
            width: '200px',
            height: '100px',
            // position: 'absolute',
            // left: 30,
          }} />
        </Box>

        {/* Navigation Links */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Button>Cryptocurrencies</Button>
          <Button>Exchanges</Button>
          <Button>Community</Button>
          <Button>Products</Button>
          <Button>Learn</Button>
        </Box>

        {/* Actions and Search */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Button startIcon={<StarBorderIcon />}>
            Halving: 42D
          </Button>
          <Button>Watchlist</Button>
          <IconButton>
            <PieChartOutlineIcon />
          </IconButton>
          <IconButton>
            <SearchIcon />
          </IconButton>
          <InputBase
            placeholder="Search…"
            inputProps={{ 'aria-label': 'search' }}
            sx={{ border: '1px solid #e0e0e0', pl: '10px', borderRadius: '4px' }}
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default SubHeader;
