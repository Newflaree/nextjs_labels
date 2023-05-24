
// React
import { useContext } from 'react';
// Material UI
import {Box, Drawer, InputAdornment, List, ListItem, ListItemIcon, ListItemText} from '@mui/material';
// Material Icons
import { MaleOutlined } from '@mui/icons-material';
// Context
import { UIContext } from '@/context';

export const SideMenu = () => {
  const { toggleSideMenu, isMenuOpen } = useContext( UIContext )

  return (
     <Drawer
      open={ isMenuOpen }
      onClose={ toggleSideMenu }
      anchor='right'
      sx={{ backdropFilter: 'blur(4px)', transition: 'all 0.5s ease-out' }}
    >
      <Box sx={{ width: 250, paddingTop: 5 }}>
        <List>
          {/*TODO: Crear NextLinks*/}
          <ListItem>
            Quienes Somos
          </ListItem>
          <ListItem>
            Services
          </ListItem>
          <ListItem>
            Cotiza Acá
          </ListItem>
          <ListItem>
            Galería
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
}
