'use client'
import React, { useRef } from 'react';
import { m, useInView } from 'framer-motion';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';
import Image from 'next/image';
import { useResponsive } from '@/hooks/use-responsive';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import productContent from './content';
import { bgGradient } from '@/theme/css';
// ----------------------------------------------------------------------

export type IproductContentProps = {
    id: number,
    title: string,
    category: string,
    description: string,
    heroUrl: string,
    coverUrl: string,
    buyUrl: string
  };

type Props = {
  productContent: IproductContentProps[];
};

export default function MarketingLandingproductContent() {
  const mdUp = useResponsive('up', 'md');
  
  return (
    <Container
      sx={{
        overflow: 'hidden',
        pt: { xs: 5, md: 10 },
        pb: 10,
      }}
    >
      <Stack
        spacing={3}
        sx={{
          textAlign: { xs: 'center', md: 'unset' },
        }}
      >
        <Typography variant="overline" sx={{ color: 'text.disabled' }}>
          Unite supplier
        </Typography>

        <Typography variant="h2">Our Products</Typography>
      </Stack>

      <Grid
        spacing={3}
        container
        alignItems="center"
        sx={{
          py: { xs: 8, md: 10 },
        }}
      >
        <Grid xs={6} md={2}>
          <SmallItem productContent={productContent[1]} />
        </Grid>

        {!mdUp && (
          <Grid xs={6} md={2}>
            <SmallItem productContent={productContent[5]} />
          </Grid>
        )}

        <Grid container xs={12} sm={12} md={8}>
          <Grid xs={6} md={9}>
            {mdUp ? (
              <LargeItem productContent={productContent[0]} />
            ) : (
              <SmallItem productContent={productContent[0]} square />
            )}
          </Grid>

          <Grid xs={6} md={3}>
            <Stack justifyContent={{ md: 'flex-end' }} sx={{ height: { md: 1 } }}>
              <SmallItem productContent={productContent[2]} square />
            </Stack>
          </Grid>

          <Grid xs={6} md={3}>
            <SmallItem productContent={productContent[3]} square />
          </Grid>

          <Grid xs={6} md={9}>
            {mdUp ? (
              <LargeItem productContent={productContent[4]} />
            ) : (
              <SmallItem productContent={productContent[4]} square />
            )}
          </Grid>
        </Grid>

        {mdUp && (
          <Grid xs={6} md={2}>
            <SmallItem productContent={productContent[5]} />
          </Grid>
        )}
      </Grid>

      <Stack alignItems={{ xs: 'center', md: 'flex-end' }}>
        <Button
          size="large"
          color="inherit"
          endIcon={<ChevronRightIcon />}
        >
          View all
        </Button>
      </Stack>
    </Container>
  );
}

// ----------------------------------------------------------------------

type LargeItemProps = {
  productContent: IproductContentProps;
};

function LargeItem({ productContent }: LargeItemProps) {
  const theme = useTheme();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <Box ref={ref}>
      <Paper
        sx={{
          display: 'grid',
          borderRadius: 2,
          boxShadow: `-24px 24px 72px -8px 0.24`,
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)',
            md: 'repeat(2, 1fr)',
          },
          ...bgGradient({
              imgUrl: productContent.coverUrl,
              startColor: alpha(theme.palette.common.black, 0.8),
              endColor: alpha(theme.palette.common.white, 0.6),
              direction: 'to top'
          })
        }}

        style={{
          transform: isInView ? "none" : "translateY(200px)",
            opacity: isInView ? 1 : 0,
            transition: `all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5${productContent.id}s`
        }}
      >
        <Box sx={{ p: 0.75, boxShadow: theme.customShadows.z16 }}>
          <Image alt="cover" src={productContent.coverUrl} width={300} height={300} style={{ opacity: .9, borderRadius: '20px' }} />
        </Box>

        <Stack alignItems="flex-end" justifyContent="space-between" sx={{ p: 3, pt: 5, height: 1 }}>
          <div>
            <Typography variant="overline" sx={{ color: 'primary' }}>
              {productContent.category}
            </Typography>

            <Typography variant="h4" sx={{ mt: 1, mb: 2, color: 'grey[800]' }}>
              {productContent.title}
            </Typography>

            <Typography variant="body2" sx={{ color: 'white' }}>
              {productContent.description}
            </Typography>
          </div>

          <Button
            size="small"
            color="primary"
            endIcon={<ChevronRightIcon />}
          >
            Learn more
          </Button>
        </Stack>
      </Paper>
    </Box>
    
  );
}

// ----------------------------------------------------------------------

type SmallItemProps = {
  productContent: IproductContentProps;
  square?: boolean;
};

function SmallItem({ productContent, square }: SmallItemProps) {
  const theme = useTheme();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mdUp = useResponsive('up', 'md');

  return (
    <Box ref={ref}>
      <Link href={'/book'}>
        <Paper
          component={m.div}
          whileHover="hover"
          sx={{
            position: 'relative',
            cursor: 'pointer',
            borderRadius: 2,
            overflow: 'hidden',
            padding: '1rem',
            ...bgGradient({
              imgUrl: productContent.coverUrl,
              startColor: alpha(theme.palette.common.black, 0.8),
              endColor: alpha(theme.palette.common.white, 0.6),
              direction: 'to top'
            })
          }}
          style={{
            transform: isInView ? "none" : "translateY(200px)",
              opacity: isInView ? 1 : 0,
              transition: `all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5${productContent.id}s`
          }}
        >
          <Stack
            spacing={1}
            alignItems="center"
            justifyContent="center"
            sx={{
              height: 'fit-content',
              zIndex: 9,
              position: 'absolute',
              color: 'common.white',
              textAlign: 'center',
            }}
          >
            <Typography variant="overline" sx={{ opacity: 0.48, color: 'primary.darker' }}>
              {productContent.category}
            </Typography>
            <Typography variant="h6" color='primary.darker'>{productContent.title}</Typography>
          </Stack>

          <m.div 
              whileHover={{
                  scale: 1.2,
                  transition: { duration: 1 },
              }}
            >
            <Image
              alt="cover"
              src={productContent.coverUrl}
              width={200}
              height={200}
              style={{
                opacity: .1,
                borderRadius: '20px'
              }}
            />
          </m.div>
        </Paper>
      </Link>
    </Box>
  
  );
}
