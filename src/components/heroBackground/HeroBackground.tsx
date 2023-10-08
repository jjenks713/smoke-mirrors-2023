import { bgGradient } from "@/theme/css"
import { alpha } from "@mui/material"
import { Box, useTheme } from "@mui/material"


const HeroBackground = ({children}: any) => {
    const theme = useTheme();

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
            {children}
        </Box>
    )
}

export default HeroBackground;