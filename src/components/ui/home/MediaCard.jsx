// Next.js
import NextLink from "next/link";
// Mateial UI
import {
  Card,
  CardMedia,
  Link
} from "@mui/material";
// Material Icon
import PlayCircleIcon from '@mui/icons-material/PlayCircle';


export const MediaCard = () => {
  return (
    <Card
      sx={{
        maxWidth: 345,
        height: '200px',
        width: '200px',
        margin: '20px',
      }}
    >
      <NextLink
        href='/'
        passHref
        legacyBehavior
      >
        <Link>
          <CardMedia
            image='https://res.cloudinary.com/dtkffzs3f/image/upload/v1684949584/services1_yeigyz.jpg'
            title="Media"
            sx={{
              height: '200px',
              width: '200px',
              position: 'absolute',
              borderRadius: '4px'
            }}
          />
          <PlayCircleIcon sx={{ position: 'relative' }} />
        </Link>
      </NextLink>
    </Card>
  );
}
