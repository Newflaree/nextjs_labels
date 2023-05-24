// Next.js
import NextLink from 'next/link';
// Material UI, Link
import { IconButton, Link } from '@mui/material';
// Mateial Icons
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export const WSPPBtn = () => {
  return (
      <NextLink 
        href=''
        passHref 
        legacyBehavior
      >
        <Link>
          <IconButton>
            <WhatsAppIcon fontSize='large' />
          </IconButton>
        </Link>
      </NextLink>
  );
}
