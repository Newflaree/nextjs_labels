// Next.js
import NextLink from 'next/link';
// Material UI
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Input,
  InputAdornment,
  Link,
  Toolbar,
  Typography
} from '@mui/material';
import Image from 'next/image';


export const Navbar = () => {
  return (
    <AppBar>
      <Toolbar>
        <NextLink
          href='/'
          passHref
          legacyBehavior
        >
          <Link
            display='flex'
            alignItems='center'
            color='black'
          >
            <Image 
              src={ process.env.NEXT_PUBLIC_LOGO || '' }
              alt='aljflafdkj'
              width={ 40 }
              height={ 40 }
            />
            <Typography>Labels Corp</Typography>
          </Link>
        </NextLink>

        <Box flex={ 1 } />

        <Box
          sx={{
            display: {
              xs: 'none',
              sm: 'block'
            }
          }}
        >
          <NextLink
            href='/'
            passHref
            legacyBehavior
          >
            <Link>
              <Button color='info'>
                Quienes Somos
              </Button>
            </Link>
          </NextLink>
          <NextLink
            href='/'
            passHref
            legacyBehavior
          >
            <Link>
              <Button color='info'>
                Servicios
              </Button>
            </Link>
          </NextLink>
          <NextLink
            href='/'
            passHref
            legacyBehavior
          >
            <Link>
              <Button color='info'>
                Cotiza acá
              </Button>
            </Link>
          </NextLink>
          <NextLink
            href='/'
            passHref
            legacyBehavior
          >
            <Link>
              <Button color='info'>
                Galería
              </Button>
            </Link>
          </NextLink>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
