import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

// ----------------------------------------------------------------------

type Props = {
  isRTL?: boolean;
};

export function LeftIcon({ isRTL }: Props) {
  return (
    <ArrowBackIosIcon sx={{
      transform: ' scaleX(-1)',
      ...(isRTL && {
        transform: ' scaleX(1)',
      }),
    }}/>
  );
}

export function RightIcon({ isRTL }: Props) {
  return (
    <ArrowForwardIosIcon 
      sx={{
        ...(isRTL && {
          transform: ' scaleX(-1)',
        }),
      }}
    />
  );
}
