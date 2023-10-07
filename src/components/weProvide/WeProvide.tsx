'use client'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import { bgGradient } from '@/theme/css';
import { alpha, useTheme } from '@mui/material';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import productContent from '../caseStudies/content';
// ----------------------------------------------------------------------

const COLORS = ['primary', 'secondary', 'success', 'warning'] as const;

const SERVICES = [
  {
    name: 'Full Foils',
    icon: '/images/color.jpg',
    content: 'Full color services. Vivid Hues, Infinite Choices: Your True Colors Shine Through.',
  },
  {
    name: 'Hair cuts',
    icon: '/images/mens.jpg',
    content: 'Mens, womens and kids. Crafting confidence one cut at a time.',
  },
  {
    name: 'Clean up services',
    icon: '/images/beard.jpg',
    content: 'Precision for Every Detail: Bang Trims & Beard Refinement.',
  },
  {
    name: 'Home care products',
    icon: '/images/unite.jpg',
    content: 'Elevate Your Everyday Beauty: Our Salon to Your Home.',
  },
];

// ----------------------------------------------------------------------

export default function MarketingLandingServices() {
  return (
    <Container
      id="services"
      sx={{
        py: { xs: 5, md: 10 },
      }}
    >
      <Stack
        spacing={3}
        sx={{
          maxWidth: 480,
          mb: { xs: 8, md: 5 },
          mx: { xs: 'auto', md: 'unset' },
          textAlign: { xs: 'center', md: 'unset' },
        }}
      >
        <Typography variant="overline" sx={{ color: 'text.disabled' }}>
          Our Services
        </Typography>

        <Typography variant="h2">We Provide</Typography>

        <Typography sx={{ color: 'text.secondary' }}>
          A full list of salon services
        </Typography>
      </Stack>

      <Box
        sx={{
          gap: 4,
          display: 'grid',
          alignItems: 'center',
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(4, 1fr)',
          },
        }}
      >
        {SERVICES.map((service, index) => (
          <ServiceItem key={service.name} service={service} index={index} />
        ))}
      </Box>
    </Container>
  );
}

// ----------------------------------------------------------------------

type ServiceItemProps = {
  service: {
    name: string;
    content: string;
    icon: string;
  };
  index: number;
};

function ServiceItem({ service, index }: ServiceItemProps) {
  const { name, icon, content } = service;
  const theme = useTheme();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  return (
    <Box ref={ref}>
      <Card
        sx={{
          px: 4,
          py: 5,
          textAlign: 'center',
          ...(index === 1 && {
            py: { xs: 5, md: 8 },
          }),
          ...(index === 2 && {
            py: { xs: 5, md: 10 },
            boxShadow: (theme) => ({ md: `-24px 24px 72px -8px 0.24` }),
          }),
          ...bgGradient({
            imgUrl: icon,
            startColor: alpha(theme.palette.primary.main, 1),
            endColor: alpha(theme.palette.primary.main, 0.5),
            direction: 'to top'
        })
        }}

        style={{
          transform: isInView ? "none" : "translateY(200px)",
            opacity: isInView ? 1 : 0,
            transition: `all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5${index + 1}s`
        }}
      >

        <Stack spacing={1} sx={{ my: 5 }}>
          <Typography variant="h6" color={'common.white'}>{name}</Typography>
          <Typography variant="body2" sx={{ color: 'common.white' }}>
            {content}
          </Typography>
        </Stack>

        <IconButton
          color={
            (index === 0 && 'primary') ||
            (index === 1 && 'secondary') ||
            (index === 2 && 'success') ||
            'warning'
          }
        >
        </IconButton>
      </Card>
    </Box>
  );
}
