import React from 'react';
import moment from 'moment';
import Typography from '@mui/material/Typography';
import 'moment/locale/ru';
function Watch() {
  return (
    <Typography variant="subtitle2" gutterBottom>
      {moment().format('LLLL')}
    </Typography>
  );
}

export default Watch;
