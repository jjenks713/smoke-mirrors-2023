import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from 'next/link';
import { Container, alpha, useTheme } from '@mui/material';
import { bgGradient } from '@/theme/css';

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const drawerWidth = 240;
const navItems = [
    {
        label: 'About',
        link: '/about',
    },
    {
        label: 'Product',
        link: '/product'
    },
    {
        label: 'Book',
        link: 'https://smoke-mirrors-slc.square.site/'
    }
];

export default function DrawerAppBar(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const theme = useTheme();
  
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Smoke/Mirrors
      </Typography>
      <Divider />
      <List>
        {navItems.map((item, index) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
                <Link href={item.link}>
                    <ListItemText primary={item.label} />
                </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex', maxHeight: '75px' }}>
      <AppBar color={'primary'}
        sx={{ 
          ...bgGradient({
              startColor: alpha(theme.palette.primary.main, 1),
              endColor: alpha(theme.palette.primary.dark, 1),
          })
      }}
      >
        <Container maxWidth="lg">
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: { xs: 0, sm: 1 }, display: 'block', justifyContent: { xs: 'center', sm: 'start' } }}
            >
              <Link href={"/"}>
                  Smoke/Mirrors
              </Link>
            </Typography>
            <Box sx={{ display: { xs: 'none', sm: 'flex' } }}>
              {navItems.map((item, index) => (
                <Box  key={item.label}>
                  <Button  sx={{ color: '#fff' }}>
                      <Link href={item.link}>
                          {item.label}
                      </Link>
                  </Button>
                  { index !== navItems.length - 1 && <Divider orientation='vertical' sx={{ height: "initial" }} /> }
                </Box>
              ))}
              
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}
