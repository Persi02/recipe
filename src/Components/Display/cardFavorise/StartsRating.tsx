import * as React from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

function HalfRating() {
  return (
    <Stack spacing={1}>
      <Rating defaultValue={0} precision={0.5} size="large" />
    </Stack>
  );
}

export default HalfRating