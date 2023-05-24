// Material UI
import { Grid } from '@mui/material';
// Components
import { HomeCard } from '.';

export const HomeContent = () => {
  return (
    <Grid
      p={ 4 }
      container
      display='flex'
      spacing={ 2 }
      sx={{
        backgroundColor: 'info'
      }}
    >
      <Grid
        item
        xs={ 12 }
        sm={ 6 }
      >
        <HomeCard />
      </Grid>
      <Grid
        item
        xs={ 12 }
        sm={ 6 }
      >
        <HomeCard />
      </Grid>
    </Grid>
  );
}
