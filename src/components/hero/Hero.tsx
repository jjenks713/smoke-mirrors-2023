'use client'
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import Image from 'next/image';
import { bgGradient } from '@/theme/css';
import { useResponsive } from '@/hooks/use-responsive';
// ----------------------------------------------------------------------

export default function MarketingLandingHero() {
  const theme = useTheme();

  const mdUp = useResponsive('up', 'md');

  return (
    <Box
      sx={{
        ...bgGradient({
            imgUrl: '/images/tools-2.png',
            startColor: alpha(theme.palette.common.black, 1),
            endColor: alpha(theme.palette.common.white, 0.6),
            direction: 'to top'
        }),
        overflow: 'hidden',
      }}
    >
        <Box width={"100%"}
            
        >
            <Container
            sx={{
            py: 15,
            display: { md: 'flex' },
            alignItems: { md: 'center' },
            height: { md: `100vh` },
            }}
        >
            <Grid container columnSpacing={{ xs: 0, md: 10 }}>
            <Grid
                xs={12}
                md={6}
                lg={5}
                sx={{
                textAlign: { xs: 'center', md: 'left' },
                }}
            >

                <Typography variant="h1" sx={{ my: 3 }}>
                Smoke/Mirrors Salon
                </Typography>

                <Typography sx={{ color: 'text.secondary' }}>
                Etiam sollicitudin, ipsum eu pulvinar rutrum, tellus ipsum laoreet sapien, quis
                venenatis ante odio sit amet eros.
                </Typography>

                <Stack
                spacing={3}
                direction={{ xs: 'column', sm: 'row' }}
                alignItems={{ xs: 'center', md: 'unset' }}
                justifyContent={{ xs: 'center', md: 'unset' }}
                sx={{ mt: 5 }}
                >
                <Button variant="contained" color="inherit" size="large" href='/book'>
                    Book Now
                </Button>

                <Stack direction="row" alignItems="center" sx={{ typography: 'h6' }}>
                    <a href='#services'>
                        <Fab size="medium" sx={{ mr: 1, ":hover": { background: theme.palette.secondary.main }}}>
                        <PlayArrowIcon />
                        </Fab>
                        See Our Work
                    </a>
                </Stack>
                </Stack>
            </Grid>

            {/* {mdUp && (
                <Grid xs={12} md={6} lg={7}>
                <img
                    alt="marketing market"
                    src=""
                />
                </Grid>
            )} */}
            </Grid>
        </Container>
        </Box>
      
    </Box>
  );
}
