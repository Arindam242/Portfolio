import React from 'react'
import { Box, Heading, HStack, Image } from '@chakra-ui/react'

const Tech = () => {
  return (
    <section>
      <Heading textAlign="center" my={20} size="xl" color="White">
        Tech Stack
      </Heading>
      <HStack>
        <Box w="300px" h="200px" shadow="xl">
          <Image alt="Image" src="https://cdn.svgporn.com/logos/react.svg" />
        </Box>
      </HStack>
    </section>
  )
}

export default Tech
