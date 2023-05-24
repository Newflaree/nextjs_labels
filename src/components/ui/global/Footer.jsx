// Material UI
import { Box, Divider, Grid, Typography } from '@mui/material';
// Material UI
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


const footerData = [
  { name: 'Usuario de prueba', icon: <AccountBoxIcon /> },
  { name: 'test@email.com', icon: <AlternateEmailIcon /> },
  { name: '+569 11111111', icon: <LocalPhoneIcon /> },
  { name: '@usuariodeprueba', icon: <InstagramIcon /> },
  { name: 'Linkedin', icon: <LinkedInIcon /> },
];

export const Footer = () => {
  return (
    <footer>
      <Box
        textAlign='center'
        pt={ 5 }
        pb={ 6 }
        sx={{
          backgroundColor: '#1E1E1E',
          color: 'white'
        }}
      >
        {
          footerData.map( item => (
            <Box
              key={ item.name }
              display='flex'
              justifyContent='center'
              sx={{
                pb: 1
              }}
            >
              { item.icon }

              <Typography
                pl={ 1 }
              >
                { item.name }
              </Typography>
            </Box>
          ))
        }
        <Divider
          sx={{
            backgroundColor: 'white',
            mx: 6,
            my: 3
          }} 
        />
      </Box>
    </footer>
  );
}
