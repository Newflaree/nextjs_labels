import {MainLayout} from '@/components/layouts'
import { SlideShow} from '@/components/ui'
import {Grid} from '@mui/material'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <MainLayout title='Inicio'>
      <SlideShow />
      <Grid
        container
        spacing={ 0 }
        sx={{
          height: '100vh'
        }}
      >
        <Grid
          item
          xs={ 0 }
          sm={ 3 }
          sx={{ 
            backgroundColor: 'red',
            display: {
              xs: 'none',
              sm: 'flex'
            }
          }}
        >
          Sidebar
        </Grid>
        <Grid
          item
          xs={ 12 }
          sm={ 9 }
          sx={{ 
            backgroundColor: 'blue',
          }}
        >
          Main
        </Grid>
      </Grid>
    </MainLayout>
  )
}
