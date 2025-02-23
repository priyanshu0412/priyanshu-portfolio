import React from 'react'
import "./globals.css"
import {
  AboutMeSection,
  HeroSection,
  ProjectSection,
  ReUseFaq,
  SkillsSection
} from '@/components'

// ---------------------------------

const Home = () => {
  return (
    <>
      <HeroSection />
      <ProjectSection />
      <AboutMeSection />
      <SkillsSection />
      <ReUseFaq />
    </>
  )
}

export default Home
