import React from 'react';
import { AppBar, Box, Button, Container, Divider, Link, List, ListItem, ListItemButton, ListItemText, Stack, Typography, alpha, useTheme } from "@mui/material";4 
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import StoreIcon from '@mui/icons-material/Store';
import { bgGradient } from '@/theme/css';
import NavItems from '@/components/navItems';

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

export default function Footer() {
    const theme = useTheme();

    return (
        <Box 
            sx={{ 
                ...bgGradient({
                    startColor: alpha(theme.palette.primary.main, 1),
                    endColor: alpha(theme.palette.primary.main, 0.4),
                })
            }}
         >
            <Container maxWidth={'lg'}>
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 4, xm: 0 }} justifyContent={'space-between'} py={'75px'}>
                    <Stack spacing={2}>
                        <Typography variant="h2">
                            Smoke/Mirrors Salon
                        </Typography>
                        <Typography variant="body1">
                            Full service salon in the heart of SLC.
                        </Typography>
                        <Typography variant='caption'>
                            &copy;	Smoke Mirrors Salon LLC 
                        </Typography>
                    </Stack>
                    <Divider sx={{ display: {xs: 'block', sm: 'none' }}} /> 
                    <Stack spacing={3} justifyContent={'center'}>
                        <Stack direction={'row'} spacing={2} justifyContent={{xs: 'start', sm: 'end'}} sx={{ mr: { xs: '10px', xm: 'none' }, ml: { xs: '10px', xm: 'none' }}}>
                            <a href='https://www.instagram.com/marcellehop/'>
                                <InstagramIcon />
                            </a>
                            <a href='https://www.instagram.com/marcellehop/'>
                                <FacebookIcon />
                            </a>
                            <a href='https://www.instagram.com/marcellehop/'>
                                <StoreIcon />
                            </a>
                        </Stack>
                        <NavItems isMobile={false} />
                    </Stack>
                </Stack>
            </Container>
        </Box>
    )
}