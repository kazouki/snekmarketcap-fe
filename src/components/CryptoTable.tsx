// CryptoTable.jsx
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper } from '@mui/material';

type CryptoRow = {
  rank: number;
  name: string;
  price: string;
  change24h: string;
  change7d: string;
  marketCap: string;
  volume24h: string;
  circulatingSupply: string;
};

const CryptoTable = ({ rows }: {
  rows: CryptoRow[];
}) => {
  return (
    <TableContainer component={Paper}>
      <Table stickyHeader aria-label="sticky table">
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>24h %</TableCell>
            <TableCell>7d %</TableCell>
            <TableCell>Market Cap</TableCell>
            <TableCell>Volume(24h)</TableCell>
            <TableCell>Circulating Supply</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row.rank}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.price}</TableCell>
              <TableCell>{row.change24h}</TableCell>
              <TableCell>{row.change7d}</TableCell>
              <TableCell>{row.marketCap}</TableCell>
              <TableCell>{row.volume24h}</TableCell>
              <TableCell>{row.circulatingSupply}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CryptoTable;
