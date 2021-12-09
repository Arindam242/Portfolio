import Head from 'next/head'
import { Box, Heading } from '@chakra-ui/react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Tech from '../components/Tech'
import About from '../components/About'
import Projects from '../components/Projects'

export default function Home() {
  return (
    <Box bgGradient="linear(to-tl ,#191E21,#2A372B)" w="100%" minH="100vh">
      <Navbar />
      <Hero />
      <About />
      <Projects />
    </Box>
  )
}
