import React from 'react';
import { Box, Button, ButtonGroup, Typography, Select, MenuItem, FormControl, InputLabel, SelectChangeEvent } from '@mui/material';

export const TableFilterHeader: React.FC = () => {
  const [rows, setRows] = React.useState('100');

  const handleChange = (event: SelectChangeEvent<string>) => {
    setRows(event.target.value as string);
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.5rem', borderBottom: '1px solid #e0e0e0' }}>
      {/* Categories */}
      <ButtonGroup variant="text" aria-label="text button group">
        <Button>Cryptocurrencies</Button>
        <Button>Categories</Button>
        <Button>CMC Crypto Awards 2024</Button>
        <Button>Solana Ecosystem</Button>
        <Button>Memes</Button>
        <Button>AI</Button>
      </ButtonGroup>

      {/* Show Rows */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <Typography>Show rows</Typography>
        <FormControl sx={{ m: 1, minWidth: 80 }} size="small">
          <InputLabel id="rows-select-label">Rows</InputLabel>
          <Select
            labelId="rows-select-label"
            id="rows-select"
            value={rows}
            onChange={handleChange}
            autoWidth
            label="Rows"
          >
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={50}>50</MenuItem>
            <MenuItem value={100}>100</MenuItem>
          </Select>
        </FormControl>
      </Box>

      {/* Filters and Customize */}
      <ButtonGroup variant="text" aria-label="text button group">
        <Button>Filters</Button>
        <Button>Customize</Button>
      </ButtonGroup>
    </Box>
  );
};
