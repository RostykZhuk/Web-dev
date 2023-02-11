import React from 'react';
import { Typography } from '@mui/material';
import { Button } from '@mui/material';
import { Container } from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { makeStyles } from '@mui/styles';
import { TextField } from '@mui/material';
import { useState } from 'react';

const useStyles = makeStyles({
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: 'block',
  },
});

export default function Create() {
  const classes = useStyles();
  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');
  const [titleError, setTitleError] = useState(false);
  const [detailsError, setDetailsError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTitleError(false);
    setDetailsError(false);

    if (title == '') {
      setTitleError(true);
    }
    if (details == '') {
      setDetailsError(true);
    }

    if (title && details) {
      console.log(title, details);
    }
  };

  return (
    <Container size='sm'>
      <Typography
        className={classes.title}
        variant='h6'
        color='textSecondary'
        component='h2'
        gutterBottom
      >
        Create a New Note
      </Typography>

      <form noValidate autoComplete='off' onSubmit={handleSubmit}>
        <TextField
          onChange={(e) => setTitle(e.target.value)}
          className={classes.field}
          label='Note title'
          variant='outlined'
          color='secondary'
          fullWidth
          required
          error={titleError}
        />
        <TextField
          onChange={(e) => setDetails(e.target.value)}
          className={classes.field}
          label='Details'
          variant='outlined'
          color='secondary'
          multiline
          rows={4}
          fullWidth
          error={detailsError}
          required
        />
        <Button
          className={classes.btn}
          onClick={() => console.log('you clicked me')}
          type='submit'
          color='secondary'
          variant='contained'
          endIcon={<KeyboardArrowRightIcon />}
        >
          Submit
        </Button>
      </form>
    </Container>
  );
}
