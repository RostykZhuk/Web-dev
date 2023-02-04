import React from 'react';
import { Typography } from '@mui/material';

export default function Notes() {
  return (
    <div>
      <Typography
        variant='h6'
        color='textSecondary'
        component='h2'
        gutterBottom
      >
        Create a New Note
      </Typography>
    </div>
  );
}
