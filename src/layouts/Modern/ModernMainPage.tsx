import React from 'react';
import Background from '../../assets/bg.png';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Button from '../../components/button/Button';
const ModernMainPage = () => {
  const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };
  return (
    <div className='relative mb-[8rem]'>
      <div className='relative flex items-center justify-center gap-[147px]'>
        <div className='flex flex-col mb-[163px]'>
          <h2 className='text-darkBlue text-6xl font-bold flex w-[545px] h-[176px] justify-center shrink-0'>
            Modern living for everyone
          </h2>
          <p className='text-darkBlue flex w-[544px] h-[104px] text-xl justify-center shrink-0'>
            We provide a complete service for the sale, purchase or rental of
            real estate. We have been operating in Madrid and Barcelona more
            than 15 years.
          </p>
        </div>
        <div className=''>
          <img src={Background} alt='' />
        </div>
      </div>
      <div className='absolute bottom-[4.25rem] left-[334px] flex items-center w-[800px] justify-around h-[104px] bg-lightGray rounded'>
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
        <Box>
          <TextField
            fullWidth
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
    </div>
  );
};

export default ModernMainPage;
