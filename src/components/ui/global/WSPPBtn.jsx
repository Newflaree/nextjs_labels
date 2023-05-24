// Next.js
import NextLink from 'next/link';
// Material UI, Link
import { IconButton, Link } from '@mui/material';
// Mateial Icons
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export const WSPPBtn = () => {
  return (
    <IconButton>
      <NextLink 
        href={ process.env.NEXT_PUBLIC_PHONE }
        target='_blank'
        passHref 
        legacyBehavior
      >
        <Link
          sx={{
            margin: 'auto',
            padding: 2,
            backgroundColor: 'green',
            borderRadius: '50%',
            position: 'fixed',
            bottom: '20px',
            right: '20px',
          }}
        >
          <WhatsAppIcon
            sx={{
              fontSize: '40px',
              transition: 'all 0.3s ease',
              color: 'white',
              ":hover": {
                fontSize: '50px'
              }
            }}
          />
        </Link>
      </NextLink>
    </IconButton>
  );
}
