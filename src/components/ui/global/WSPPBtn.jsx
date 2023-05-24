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
          position: 'fixed',
          bottom: '27px',
          right: '27px',
        }}
        >
          <WhatsAppIcon
            sx={{
              fontSize: '60px',
              transition: 'all 0.3s ease',
              color: 'green',
              ":hover": {
                fontSize: '65px'
              }
            }}
          />
        </Link>
      </NextLink>
    </IconButton>
  );
}
