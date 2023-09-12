import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Button from '../components/button/Button';
const Rectangle = () => {
  const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };
  return (
    <div className='flex items-center'>
      <FormControl sx={{ m: 1, minWidth: 160 }} size='medium'>
        <InputLabel id='demo-select-small-label'>Property type</InputLabel>
        <Select
          labelId='demo-select-small-label'
          id='demo-select-small'
          value={age}
          label='Age'
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <Box
        sx={{
          width: 500,
          maxWidth: '100%',
        }}
      >
        <TextField
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <LocationOnIcon></LocationOnIcon>
              </InputAdornment>
            ),
          }}
          id='outlined-basic'
          variant='outlined'
          placeholder='Search of location '
        />
      </Box>
      <Button type='button'>Search</Button>
    </div>
  );
};

export default Rectangle;
