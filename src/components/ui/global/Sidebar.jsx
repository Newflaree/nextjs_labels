// Next.js
import NextLink from 'next/link';
// Material UI
import { Box, Button, Divider, Link } from '@mui/material';


export const Sidebar = ({ drawerWidth = 270 }) => {
  return (
    <Box
      width={ drawerWidth }
      display='flex'
      flexDirection='column'
      p={ 3 }
      sx={{
        borderRight: 'solid 1px black'
      }}
    >
      <NextLink
        href='/'
        passHref
        legacyBehavior
      >
        <Link>
            Quienes Somos
        </Link>
      </NextLink>
      <NextLink
        href='/'
        passHref
        legacyBehavior
      >
        <Link>
            Quienes Somos
        </Link>
      </NextLink>
      <NextLink
        href='/'
        passHref
        legacyBehavior
      >
        <Link>
            Quienes Somos
        </Link>
      </NextLink>

      <Divider />


    </Box>
  );
}
