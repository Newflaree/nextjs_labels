// Next.js
import NextLink from 'next/link';
// Material UI
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Link,
  Typography
} from '@mui/material';


export const HomeCard = ({ cardTitle = '', cardDescription, cardImage = '' }) => {
  return (
    <Card sx={{ maxWidth: 345, margin: 'auto' }} >
      <NextLink
        href='/'
        passHref
        legacyBehavior
      >
        <Link>
          <CardMedia
            sx={{ height: '200px' }}
            image={ cardImage }
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              { cardTitle }
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean risus elit, ullamcorper eget nisl nec, tempus tempor lorem. Vestibulum euismod orci eu tellus convallis, a eleifend metus posuere. Pellentesque a nibh eget risus cursus hendrerit.
            </Typography>
          </CardContent>
        </Link>
      </NextLink>
    </Card>
  );
}
