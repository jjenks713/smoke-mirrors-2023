import React from 'react';
import { AppBar, Box, Button, Container, Divider, Link, List, ListItem, ListItemButton, ListItemText, Stack, Typography } from "@mui/material";4 
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import StoreIcon from '@mui/icons-material/Store';

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
        link: '/book'
    }
];

export default function Footer() {

    return (
        <Box sx={{ backgroundColor: 'primary.main' }}>
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
                        <Box sx={{ display: 'flex', justifyContent: {xs: 'start', sm: 'end'} }}>
                            {navItems.map((item, index) => (
                            <>
                                <Button key={item.label}>
                                    <Link href={item.link} style={{ color: 'white' }}>
                                        {item.label}
                                    </Link>
                                </Button>
                                { index !== navItems.length - 1 && <Divider orientation='vertical' sx={{ height: "initial" }} /> }
                            </>
                            ))}
                            
                        </Box>
                    </Stack>
                </Stack>
            </Container>
        </Box>
    )
}