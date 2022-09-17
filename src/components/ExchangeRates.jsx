import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function ExchangeRates({ rates }) {
  function createData(name, price) {
    return { name, price };
  }
  const rows = [
    createData('BYN', rates.BYN),
    createData('EUR', rates.EUR),
    createData('RUB', rates.RUB),
    createData('PLN', rates.PLN),
    createData('UAH', rates.UAH),
    createData('CNY', rates.CNY),
    createData('GEL', rates.GEL),
  ];
  console.log(rates.BYN);
  return (
    <div>
      <TableContainer component={Paper} sx={{ borderRadius: '10px' }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Валюта</TableCell>
              <TableCell align="right">Стоимость</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.price}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default ExchangeRates;
