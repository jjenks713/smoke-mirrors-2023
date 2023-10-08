"use client"
import { useRef } from 'react';
import { motion } from 'framer-motion';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';

import { bgGradient } from '@/theme/css';
import { ITeamMemberProps } from '@/types/team';
import { useResponsive } from '@/hooks/use-responsive';
import { useBoundingClientRect } from '@/hooks/use-bounding-client-rect';
import Carousel, { useCarousel, CarouselDots, CarouselArrows } from '@/components/carousel';

import MarketingTeamItem from './marketing-team-item';
import HeroBackground from '@/components/heroBackground';

// ----------------------------------------------------------------------

type Props = {
  members: ITeamMemberProps[];
};

export default function MarketingTeam({ members }: Props) {
  const theme = useTheme();

  const mdUp = useResponsive('up', 'md');

  const carousel = useCarousel({
    dots: !mdUp,
    slidesToShow: 4,
    slidesToScroll: 1,
    ...CarouselDots({
      sx: {
        mt: 8,
      },
    }),
    responsive: [
      {
        breakpoint: theme.breakpoints.values.xl,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: theme.breakpoints.values.lg,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: theme.breakpoints.values.sm,
        settings: { slidesToShow: 1 },
      },
    ],
  });

  const containerRef = useRef<HTMLDivElement>(null);

  const container = useBoundingClientRect(containerRef);

  const offsetLeft = container?.left;

  return (
    <HeroBackground>
        <Container
          sx={{
            left: { md: 0 },
            right: { md: 0 },
            mb: { xs: 8, md: 0 },
            mt: 25
          }}
        >
          <Grid container spacing={3} justifyContent="space-between">
            <Grid xs={12} md={4}>
              <Stack spacing={3} sx={{ textAlign: { xs: 'center', md: 'unset' } }}>


                <Typography variant="h1">
                  Meet Our Team
                </Typography>

                <Typography sx={{ color: 'common.white' }}>
                  Our team of crack professional stylists.
                </Typography>
              </Stack>
            </Grid>

          </Grid>
        </Container>

        <Box
            sx={{
              padding: '5%',
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center'
            }}
          >
              {members.map((member) => (
                <Box
                  key={member.id}
                  sx={{
                    pl: { xs: 2, md: 4 },
                    pr: { xs: 2, md: 0 },
                    m: 5,
                    color: 'common.white',
                  }}
                  component={motion.div}
                  whileHover={{ scale: 1.2 }}
                >
                  <MarketingTeamItem member={member} />
                </Box>
              ))}
          </Box>
    </HeroBackground>
  );
}
