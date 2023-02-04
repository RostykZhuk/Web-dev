import React from 'react';
import { Typography } from '@mui/material';
import { Button } from '@mui/material';
import { Container } from '@mui/material';
import { AcUnitOutlined } from '@mui/icons-material';
import SendIcon from '@mui/icons-material/Send';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

export default function Create() {
  return (
    <Container>
      <Typography
        variant='h6'
        color='textSecondary'
        component='h2'
        gutterBottom
      >
        Create a New Note
      </Typography>

      <Button
        onClick={() => console.log('You clicked me')}
        type='submit'
        color='secondary'
        variant='contained'
        startIcon={<SendIcon />}
        endIcon={<KeyboardArrowRightIcon />}
      >
        Submit
      </Button>

      {/* icons */}
      {/* <br />
      <AcUnitOutlined />
      <AcUnitOutlined color='secondary' fontSize='large' />
      <AcUnitOutlined color='secondary' fontSize='small' />
      <AcUnitOutlined color='action' fontSize='small' />
      <AcUnitOutlined color='error' fontSize='small' />
      <AcUnitOutlined color='disabled' fontSize='small' /> */}
    </Container>
  );
}
