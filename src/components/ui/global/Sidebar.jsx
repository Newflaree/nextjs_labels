// Next.js
import NextLink from 'next/link';
// Material UI
import { Box, Button, Divider, Link, Typography } from '@mui/material';
// Components
import { MediaCard } from '../home';


export const Sidebar = ({ drawerWidth = 270 }) => {
  return (
    <Box
      width={ drawerWidth }
      display='flex'
      flexDirection='column'
      sx={{
        borderRight: 'solid 1px #1E1E1E',
      }}
    >
      <NextLink
        href='/'
        passHref
        legacyBehavior
      >
        <Link color='primary' >
          <Typography
            variant='h6'
            component='h6'
            p={ 3 }
            borderBottom={ '1px solid #1E1E1E' }
            sx={{
              transition: 'all 0.3s ease',
              ":hover": {
                backgroundColor: '#1E1E1E',
                color: 'white'
              }
            }}
          >
            Historia
          </Typography>
        </Link>
      </NextLink>
      <NextLink
        href='/'
        passHref
        legacyBehavior
      >
        <Link color='primary'>
          <Typography
            variant='h6'
            component='h6'
            p={ 3 }
            borderBottom={ '1px solid #1E1E1E' }
            sx={{
              transition: 'all 0.3s ease',
              ":hover": {
                backgroundColor: '#1E1E1E',
                color: 'white'
              }
            }}
          >
            Misión
          </Typography>
        </Link>
      </NextLink>
      <NextLink
        href='/'
        passHref
        legacyBehavior
      >
        <Link color='primary'>
          <Typography
            variant='h6'
            component='h6'
            p={ 3 }
            borderBottom={ '1px solid #1E1E1E' }
            sx={{
              transition: 'all 0.3s ease',
              ":hover": {
                backgroundColor: '#1E1E1E',
                color: 'white'
              }
            }}
          >
            Objetivos
          </Typography>
        </Link>
      </NextLink>
      <NextLink
        href='/'
        passHref
        legacyBehavior
      >
        <Link color='primary'>
          <Typography
            variant='h6'
            component='h6'
            p={ 3 }
            borderBottom={ '1px solid #1E1E1E' }
            sx={{
              transition: 'all 0.3s ease',
              ":hover": {
                backgroundColor: '#1E1E1E',
                color: 'white'
              }
            }}
          >
            Declaración de garantía
          </Typography>
        </Link>
      </NextLink>

      <MediaCard />
    </Box>
  );
}
