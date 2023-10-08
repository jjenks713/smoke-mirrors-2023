import { Box } from '@mui/material'
import WeProvide from '@/sections/weProvide'
import MarketingLandingHero from '@/sections/mainHero'
import CaseStudies from '@/sections/caseStudies'

export default function Home() {
  return (
      <Box>
        <MarketingLandingHero />
        <WeProvide />
        <CaseStudies />
      </Box>
  )
}
