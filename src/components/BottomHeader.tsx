import React from 'react';
import { Box, Card, CardContent, Typography, CardActions, Button, Switch, FormControlLabel } from '@mui/material';

export const BottomHeader: React.FC = () => {
  // Placeholder data for trending section
  const trendingItems = [
    { name: 'Pepe', symbol: 'PEPE', change: '-9.07%' },
    { name: 'dogwiwhat', symbol: 'WIF', change: '-12.62%' },
    { name: 'Meme Ai', symbol: 'MEMEAI', change: '+293.89%' }
  ];

  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', padding: '1rem', gap: '1rem', overflowX: 'auto' }}>
      {/* Trending Section */}
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            🔥 Trending
          </Typography>
          {trendingItems.map((item, index) => (
            <Typography key={index} variant="body2">
              {index + 1}. {item.name} {item.symbol} {item.change}
            </Typography>
          ))}
        </CardContent>
        <CardActions>
          <Button size="small">More</Button>
        </CardActions>
      </Card>

      {/* Crypto Awards Section */}
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography variant="body2">
            CRYPTO AWARDS 2024
          </Typography>
          {/* Placeholder for image */}
          <Typography variant="body2">
            Click to Watch Now
          </Typography>
        </CardContent>
      </Card>

      {/* Fear & Greed Index Section */}
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography variant="h5" component="div">
            Fear & Greed Index
          </Typography>
          {/* Placeholder for index graphic */}
          <Typography variant="body2">
            88
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">More</Button>
        </CardActions>
      </Card>

      {/* Highlights Switch */}
      <FormControlLabel control={<Switch defaultChecked />} label="Highlights" />

    </Box>
  );
};
