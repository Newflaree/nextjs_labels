// Material UI
import { Grid } from '@mui/material';
// Components
import { HomeCard } from '.';


export const HomeContent = () => {
  return (
    <Grid
      container
      display='flex'
      spacing={ 2 }
      sx={{
        p: {
          xs: 3,
          sm: 8
        }
      }}
    >
      <Grid
        item
        xs={ 12 }
        sm={ 6 }
      >
        <HomeCard
          cardTitle='Servicios Publicitarios'
          cardImage='https://res.cloudinary.com/dtkffzs3f/image/upload/v1684949584/services1_yeigyz.jpg'
        />
      </Grid>
      <Grid
        item
        xs={ 12 }
        sm={ 6 }
      >
        <HomeCard
          cardTitle='Servicios Construcción'
          cardImage='https://res.cloudinary.com/dtkffzs3f/image/upload/v1684949593/services2_vtxqij.jpg'
        />
      </Grid>
    </Grid>
  );
}
