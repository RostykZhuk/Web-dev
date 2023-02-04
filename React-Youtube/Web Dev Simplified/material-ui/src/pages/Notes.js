import React from 'react';
import { Typography } from '@mui/material';
import { Button } from '@mui/material';
import { Container } from '@mui/material';
export default function Notes() {
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
      >
        Submit
      </Button>
      {/* <Button type='submit'>Submit</Button>
      <Button type='submit' color='secondary' variant='outlined'>
        Submit
      </Button> */}

      {/* <ButtonGroup color='secondary' variant='contained'>
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup> */}
    </Container>
  );
}
