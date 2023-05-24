import {MainLayout} from '@/components/layouts'
import { HomeContent, Sidebar, SlideShow} from '@/components/ui'
import {Grid} from '@mui/material'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })
const drawerWidth = 270;

export default function Home() {
  return (
    <MainLayout title='Inicio'>
      <SlideShow />
      <Grid
        container
        spacing={ 0 }
      >
        <Grid
          item
          xs={ 0 }
          width={ drawerWidth }
          sx={{ 
            backgroundColor: '#F2F2F2',
            display: {
              xs: 'none',
              sm: 'flex'
            }
          }}
        >
          <Sidebar drawerWidth={ drawerWidth } />
        </Grid>
        <Grid
          item
          width={ `calc( 100% - ${ drawerWidth }px )` }
          sx={{ 
            width: {
              xs: '100vw',
              sm: `calc( 100% - ${ drawerWidth }px )`
            }
          }}
        >
          <HomeContent />
        </Grid>
      </Grid>
    </MainLayout>
  )
}
