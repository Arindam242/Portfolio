import { Heading, Box, Image, Flex, Text } from '@chakra-ui/react'
import React from 'react'

const About = () => {
  return (
    <Box py={20}>
      <Heading textAlign="center" color="gray.400" my={50}>
        About us
      </Heading>
      <Flex
        bg="transparent"
        mx="auto"
        skewX="5deg"
        border="1px"
        borderColor="#60F349"
        transform="auto"
        w="70%"
        h="300px"
        align="center"
      >
        <Image mx={10} w="20%" rounded={200} src={'/my.jpg'} alt="Image" />
        <Flex direction="column">
          <Heading color="#60F349">Hi, I'm Arindam Roy</Heading>
          <Text fontSize="xl" my={5} color="gray.400">
            Hey I'm Arindam Roy and i'm a Full Stack Developer . At an very
            early age of mine i was facinated by tech . I spent most my time
            growing up learning new things and applying them.
          </Text>
        </Flex>
      </Flex>
    </Box>
  )
}

export default About
