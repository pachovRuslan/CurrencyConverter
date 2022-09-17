import React from 'react';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
const defaultCurrencies = ['BYN', 'RUB', 'USD', 'EUR'];

export const Block = ({ value, currency, onChangeValue, onChangeCurrency }) => (
  
  <Box
  sx={{
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    bgcolor: 'background.default',
    color: 'text.primary',
    borderRadius: 1,
  }}>
<div className="block">
    <TextField
      id="standard-select-currency"
      select
      label="Select"
      value={currency}
      variant="filled"
      helperText="Please select your currency"
      sx={{  width: '335px', marginTop: '20px', marginBottom: '20px', marginLeft:'5px' }}>
       
      {defaultCurrencies.map((option) => (
        <MenuItem key={option} value={option} onClick={() => onChangeCurrency(option)}>
          {option}
        </MenuItem>
      ))}
    </TextField>

    <TextField
      onChange={(e) => onChangeValue(e.target.value)}
      value={value}
      type="number"
      placeholder={0}
      id="outlined-number"
      label={currency}
      sx={{ marginTop: '20px', width: '335px', marginBottom: '20px', marginLeft:'5px' }}
      InputLabelProps={{
        shrink: true,
      }}
    />
  </div>
</Box>
  
  
  
);
