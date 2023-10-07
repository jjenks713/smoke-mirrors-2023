import { Box } from '@mui/material'
import WeProvide from '@/components/weProvide'
import Hero from '@/components/hero'
import CaseStudies from '@/components/caseStudies'

export default function Home() {
  return (
      <Box>
        <Hero />
        <WeProvide />
        <CaseStudies />
      </Box>
  )
}
