import { m, motion } from 'framer-motion';

import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { alpha, styled } from '@mui/material/styles';
import Stack, { StackProps } from '@mui/material/Stack';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import Image from 'next/image';
import { bgGradient } from '@/theme/css';
import { ITeamMemberProps } from '@/types/team';
import { varHover, varTranHover } from '@/components/animate';

// ----------------------------------------------------------------------
export const _socials = [
  {
    value: 'facebook',
    label: 'FaceBook',
    icon: <FacebookIcon />,
    color: '#1877F2',
  },
  {
    value: 'instagram',
    label: 'Instagram',
    icon: <InstagramIcon />,
    color: '#E02D69',
  },
];

const StyledOverlay = styled('div')(({ theme }) => ({
  ...bgGradient({
    startColor: `${alpha(theme.palette.common.black, 0)} 0%`,
    endColor: `${theme.palette.common.black} 75%`,
  }),
  top: 0,
  left: 0,
  zIndex: 8,
  opacity: 0,
  width: '100%',
  height: '100%',
  position: 'absolute',
  transition: theme.transitions.create('opacity', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.short,
  }),
  '&:hover': { opacity: 1 },
}));

// ----------------------------------------------------------------------

interface TeamMarketingMemberProps extends StackProps {
  member: ITeamMemberProps;
}

export default function MarketingTeamItem({ member, ...other }: TeamMarketingMemberProps) {
  const { name, role, photo } = member;

  return (
    <Stack>
      <Box
        component={m.div}
        whileHover="hover"
        variants={varHover(0.95)}
        transition={varTranHover()}
        sx={{ position: 'relative', borderRadius: 2, overflow: 'hidden' }}
      >
        <StyledOverlay>
          <Stack
            direction="row"
            justifyContent="center"
            sx={{ width: 1, zIndex: 9, bottom: 24, position: 'absolute' }}
          >
            {_socials.map((social) => (
              <IconButton key={social.value} color="primary" component={motion.button}  whileTap={{ scale: 0.8 }}>
                {social.icon}
              </IconButton>
            ))}
          </Stack>
        </StyledOverlay>

        <m.div variants={varHover(1.15)} transition={varTranHover()}>
          <Image src={photo} alt={name} width={200} height={200} />
        </m.div>
      </Box>

      <Stack spacing={0.5} sx={{ mt: 2.5, textAlign: 'center' }}>
        <Typography variant="h6">{name}</Typography>

        <Typography variant="body2" sx={{ color: 'text.disabled' }}>
          {role}
        </Typography>
      </Stack>
    </Stack>
  );
}
